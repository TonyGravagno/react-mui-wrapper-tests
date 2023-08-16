import { TextField, TextFieldProps } from '../TextField'
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

export const TextArea = (props: TextFieldProps) => {
  return Field(props)
}

const MuiField = (props: TextFieldProps) => {
  return <TextField {...props} multiline />
}

const HtmlField = (props: TextFieldProps) => {
  const { label } = props
  type TextAreaProps = Pick<
    InputHTMLAttributes<HTMLInputElement>,
    keyof InputHTMLAttributes<HTMLTextAreaElement>
  >
  const propSubset: TextAreaProps = props
  const textAreaProps = propSubset as InputHTMLAttributes<HTMLTextAreaElement>
  return (
    <div>
      {label && (
        <>
          <label>{label}</label>&nbsp;&nbsp;&nbsp;
        </>
      )}
      <textarea {...textAreaProps} />
    </div>
  )
}
