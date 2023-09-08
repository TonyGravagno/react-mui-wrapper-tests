import { config } from '@root/app.config'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useSchema } from './SchemaContext'
import { TextFieldProps as FieldTextProps } from '@apptypes/input'
import { LabelProps, MuiProps } from '@apptypes/label'

import {
  FilledInput,
  FilledInputProps,
  Input,
  InputLabel as MuiLabel,
  InputProps,
  OutlinedInput,
  OutlinedInputProps,
  FormControl,
  FormLabel,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'

const controlType = 'text'

export const FieldText: React.FC<FieldTextProps> = ({
  name,
  label,
  variant = 'outlined',
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const schema = useSchema()
  const effectiveLabel = label || schema._def.description || ''
  const effectiveId = otherProps.id || name
  const onChangeEnabled = otherProps.onBlur !== undefined

  const defaultProps = {
    id: effectiveId,
    name: name,
    type: controlType,
    size: config.ui.text_size,
    style: config.styles.mui.formFieldInput,
    label: effectiveLabel,
  }

  const renderInput = (field: any) => {
    const commonProps = {
      ...defaultProps,
      ...field,
      error: !!errors[name],
      helperText: errors[name] ? <span>{String(errors[name]?.message)}</span> : null,
    }

    switch (variant) {
      case 'filled':
        return <FilledInput {...commonProps} {...(otherProps as FilledInputProps)} />
      case 'outlined':
        return <OutlinedInput {...commonProps} {...(otherProps as OutlinedInputProps)} />
      case 'standard':
      default:
        return <Input {...commonProps} {...(otherProps as InputProps)} />
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister={onChangeEnabled}
      rules={{
        validate: value => {
          const result = schema.safeParse(value)
          if (result?.success) {
            return true
          } else {
            return result?.error?.errors[0]?.message || 'Invalid value'
          }
        },
      }}
      render={({ field }) =>
        typeof effectiveLabel === 'string' ? (
          <MuiTextField
            {...defaultProps}
            variant={variant}
            label={effectiveLabel}
            {...field}
            {...(otherProps as MuiTextFieldProps)}
            error={!!errors[name]}
            helperText={errors[name] ? <span>{String(errors[name]?.message)}</span> : null}
          />
        ) : (
          <FormControl variant={variant}>
            <FormLabel>{effectiveLabel}</FormLabel>
            {renderInput(field)}
          </FormControl>
        )
      }
    />
  )
}


export type LabelForComponentOptions = {
  props?: LabelProps
}
export const getLabelForComponent = (
  field: React.ReactNode,
  options?: LabelForComponentOptions
) => {
  const type = typeof field
  switch (type) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
      return <Label {...(options?.props ?? {})}>{field}</Label>
    case 'function':
    case 'object':
    case 'symbol':
      return field
    case 'undefined':
      return null
    default:
      throw new Error('Unknown label type')
  }
}

export const Label = (props: LabelProps) => {
  const muiProps = props as MuiProps
  const style = muiProps.style ?? config.styles.mui.formFieldLabel
  return <MuiLabel {...muiProps} style={style} />
}
