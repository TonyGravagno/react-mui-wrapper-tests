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
import { AnyZodObject } from 'zod'

const controlType = 'text'

export const FieldText: React.FC<FieldTextProps> = ({
  name,
  variant = 'outlined',
  ...fieldProps
}: FieldTextProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const schemaObject = useSchema() as AnyZodObject

  const fieldSchema = schemaObject._def.shape()[name]
  const meta = JSON.parse(fieldSchema.description)
  const label: string = meta['label'] ?? ''
  const effectiveLabel = fieldProps.label ?? label ?? ''
  const effectiveId = fieldProps.id ?? name

  fieldProps.multiline = fieldProps.multiline === true || (meta['multiline'] ?? false)

  const onChangeEnabled = fieldProps.onBlur !== undefined
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
        return <FilledInput {...commonProps} {...(fieldProps as FilledInputProps)} />
      case 'outlined':
        return <OutlinedInput {...commonProps} {...(fieldProps as OutlinedInputProps)} />
      case 'standard':
      default:
        return <Input {...commonProps} {...(fieldProps as InputProps)} />
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister={onChangeEnabled}
      rules={{
        validate: value => {
          const result = fieldSchema.safeParse(value)
          if (result?.success) {
            return true
          } else {
            return result?.error?.errors[0]?.message ?? 'Invalid value'
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
            {...(fieldProps as MuiTextFieldProps)}
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
