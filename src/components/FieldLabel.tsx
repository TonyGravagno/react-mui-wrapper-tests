import { config } from '@root/app.config'
import React from 'react'
import { LabelProps } from '@apptypes/label'
import { InputLabel as MuiLabel } from '@mui/material'

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
      return <FieldLabel {...options?.props}>{field}</FieldLabel>
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

export const FieldLabel: React.FC<LabelProps> = (props: LabelProps) => {
  return (
    <MuiLabel
      // provide defaults and let props override
      style={config.styles.mui.formFieldLabel}
      {...props}
    />
  )
}
