import { TextField as MuiTextField } from '@mui/material'
import { TextFieldProps } from './types'
import { AppConfig } from '@utils/config'
import { InputHTMLAttributes } from 'react'

/**
 * Consistent for all wrapped fields ?
 */

const Field = (props: any) => {
  const config = AppConfig()

  switch (config.ui.toolkit) {
    case 'html':
      return <HtmlField {...props} />
    case 'mui':
      return <MuiField {...props} />
    default:
      return null
  }
}

/**
 * https://mui.com/material-ui/react-text-field/
 */

export const TextField = (props: TextFieldProps) => {
  return Field(props)
}

const MuiField = (props: TextFieldProps) => {
  // Reasonable defaults : Not necessary, for now stick with MUI defaults
  const {
    label = props.label ?? 'Field?',
    type = props.type ?? 'text',
    value = props.value ?? '',
  } = props

  return <MuiTextField {...props} label={label} type={type} value={value} />
} //      rows={rows}

const HtmlField = (props: TextFieldProps) => {
  const { label } = props
  const htmlProps: InputHTMLAttributes<HTMLInputElement> = props
  return (
    <div>
      {label && (
        <>
          <label>{label}</label>&nbsp;&nbsp;&nbsp;
        </>
      )}
      <input {...htmlProps} />
    </div>
  )
}
