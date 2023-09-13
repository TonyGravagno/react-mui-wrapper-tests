import { config } from '@root/app.config'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useSchema } from './SchemaContext'
import { CheckboxProps as FieldCheckboxProps } from '@apptypes/toggle'
import { getStyles, getToggleSetting } from '@utils/toggles/common'
import { FormControlLabel, FormControl, FormLabel, Checkbox as MuiCheckbox } from '@mui/material'
import { AnyZodObject } from 'zod'

export const FieldCheckbox: React.FC<FieldCheckboxProps> = ({
  ...fieldProps
}: FieldCheckboxProps) => {
  const {
    control,
    // formState: { errors },
  } = useFormContext()

  const schemaObject = useSchema() as AnyZodObject

  const fieldSchema = schemaObject._def.shape()[fieldProps.name]
  const meta = JSON.parse(fieldSchema.description)
  const label: string = meta['label'] ?? ''
  const effectiveLabel = fieldProps.label ?? label ?? ''
  const effectiveId = fieldProps.id ?? fieldProps.name

  const onChangeEnabled = fieldProps.onBlur !== undefined
  fieldProps.label = effectiveLabel

  const { inputStyle, labelComponent } = getStyles(fieldProps)

  return (
    <Controller
      name={fieldProps.name}
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
      render={({ field }) => (
        <FormControlLabel
          id={effectiveId}
          name={fieldProps.name}
          label={labelComponent}
          labelPlacement={fieldProps.labelPlacement ?? config.ui.checkboxLabelPlacement}
          checked={getToggleSetting(fieldProps.value)}
          color={config.ui.checkboxColor}
          // required={false}
          style={config.styles.mui.formFieldInput}
          control={
            typeof effectiveLabel === 'string' ? (
              <MuiCheckbox
                id={effectiveId}
                inputProps={{}}
                disableRipple={config.ui.checkboxDisableRipple}
                size={config.ui.text_size}
                indeterminate={false}
                style={inputStyle}
                {...field}
                {...fieldProps}
                // label={effectiveLabel}
              />
            ) : (
              <FormControl>
                <FormLabel>{effectiveLabel}</FormLabel>
                <MuiCheckbox />
              </FormControl>
            )
          }
          //error={!!errors[fieldProps.name]}
          //helperText={errors[fieldProps.name] ? <span>{String(errors[fieldProps.name]?.message)}</span> : null}
        />
      )}
    />
    // The props of the ButtonBase component are also available in Checkbox
    // You can take advantage of this to target nested components.
  )
}

/*

// icon=<CheckBoxOutlineBlankIcon />
// checkedIcon=<CheckBoxIcon />
// indeterminateIcon=<IndeterminateCheckBoxIcon />

*/
