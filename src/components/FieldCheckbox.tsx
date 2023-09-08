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
    style: config.styles.current().formFieldInput,
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
import { FormControlLabel, Checkbox as MuiCheckbox, CheckboxProps as MuiProps } from '@mui/material'
import { CheckboxProps } from '@apptypes/toggle'
import { getStyles, toggleSetting } from '@utils/toggles/common'

export const Checkbox = (props: CheckboxProps) => {
  const { inputStyle, labelComponent } = getStyles(props)

  return (
    <FormControlLabel
      id={config.ui.id_name}
      name={config.ui.id_name}
      label={labelComponent}
      labelPlacement={props.labelPlacement}
      checked={toggleSetting(props.value)}
      color={config.ui.checkboxColor}
      required={false}
      // style={config.styles.current().formFieldInput}
      control={
        <MuiCheckbox
          inputProps={{}}
          disableRipple={config.ui.checkboxDisableRipple}
          size={config.ui.text_size}
          indeterminate={false}
          {...(props as MuiProps)}
          style={inputStyle}
        />
      }
    />
    // The props of the ButtonBase component are also available in Checkbox
    // You can take advantage of this to target nested components.
  )
}
// icon=<CheckBoxOutlineBlankIcon />
// checkedIcon=<CheckBoxIcon />
// indeterminateIcon=<IndeterminateCheckBoxIcon />

*/