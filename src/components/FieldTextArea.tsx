import { config } from '@root/app.config'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useSchema } from './SchemaContext'
import { TextFieldProps as FieldTextProps } from '@apptypes/input'
import {
  FilledInput,
  FilledInputProps,
  Input,
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

/*
import { config } from '@root/app.config'
import { TextAreaProps, MuiProps } from '@apptypes/textarea'
import { TextField as MuiTextField } from '@mui/material'

export const TextArea = (props: TextAreaProps) => {
  return (
    <MuiTextField
      multiline
      type="textarea"
      id={config.ui.id_name}
      name={config.ui.id_name}
      size={config.ui.text_size}
      variant={config.ui.text_variant}
      rows={config.ui.textarea_rows}
      maxRows={config.ui.textarea_maxRows}
      style={config.styles.mui.formFieldInput}
      {...(props as MuiProps)}
    />
  )
}

*/