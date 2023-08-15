import { TextField as MuiTextField } from '@mui/material'
import { TextFieldProps } from './types'
import { AppConfig } from '@utils/config'

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

export const TextField = (props: TextFieldProps) => {
  return Field(props)
}

const MuiField = (props: TextFieldProps) => {
  return <MuiTextField {...props} />
}

const HtmlField = (props: TextFieldProps) => {
  const { label, type, value, onChange, onBlur, onFocus, disabled } = props
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
      />
    </div>
  )
}
