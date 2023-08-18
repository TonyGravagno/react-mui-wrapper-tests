import * as D from './dependencies'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material'
import type { BaseTextFieldProps } from '@mui/material'
/**
 * https://mui.com/material-ui/react-text-field/
 */
const config = D.AppConfig()

const defaults  : D.TextFieldProps = {
  size: "small",// config.defaults.text_size as BaseTextFieldProps['size']

  // ,
  // variant: config.defaults.text_variant,
}

const MuiField = (props: D.TextFieldProps) => {
  return <D.MuiTextField {...defaults} {...props} />
}

const HtmlField = (props: D.TextFieldProps) => {
  const newProps = D.getRequiredProps<D.TextFieldProps, D.Base['input']>(
    { ...defaults, ...props },
    <input />
  )
  return (
    <div>
      <D.Label label={props.label} />
      <input {...newProps} />
    </div>
  )
}

/**
 * Wrapper for TextArea, TextField, and related controls internally invokes MuiTextField or React.input
 * @param props
 * @returns 
 */
export const TextField = (props: D.TextFieldProps) => {
  return D.RenderingAgent({ html: HtmlField, mui: MuiField })(props)
}
