import { TextField as MuiTextField } from '@mui/material'
import { BasePropsType, TextFieldProps } from './types'
import { RenderingAgent } from '@utils/RenderingAgent'
import { InputHTMLAttributes } from 'react'
import { getRequiredProps } from '@utils/filterProperties'

/**
 * https://mui.com/material-ui/react-text-field/
 */

const MuiField = (props: TextFieldProps) => {
  // Reasonable defaults : Not necessary, for now stick with MUI defaults
  const {
    label = props.label ?? 'Field?',
    type = props.type ?? 'text',
    value = props.value ?? '',
    children = props.children || null,
  } = props
  // Remove anything the MUI field doesn't recognize
  const requiredProps = getRequiredProps<TextFieldProps, BasePropsType>(props, <TextField />)
  return (
    <MuiTextField {...requiredProps} label={label} type={type} value={value}>
      {children}
    </MuiTextField>
  )
}

const HtmlField = (props: TextFieldProps) => {
  const { children, label } = props
  // Remove anything the HTML field doesn't recognize
  const requiredProps = getRequiredProps<TextFieldProps, InputHTMLAttributes<HTMLInputElement>>(
    props,
    <input />
  )
  return (
    <div>
      {label && (
        <>
          <label>{label}</label>&nbsp;&nbsp;
        </>
      )}
      <input {...requiredProps}>{children}</input>
    </div>
  )
}

export const TextField = (props: TextFieldProps) => {
  return RenderingAgent({ html: HtmlField, mui: MuiField })(props)
}
