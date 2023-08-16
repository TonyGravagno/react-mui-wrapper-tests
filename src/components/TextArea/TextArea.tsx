import { BasePropsType, TextField, TextFieldProps } from '../TextField'
import { RenderingAgent } from '@utils/RenderingAgent'
import { InputHTMLAttributes } from 'react'
import { getRequiredProps } from '@utils/filterProperties'

/**
 * https://mui.com/material-ui/react-text-field/
 */

const MuiField = (props: TextFieldProps) => {
  const children = props.children || null
  // Remove anything the MUI field doesn't recognize
  const requiredProps = getRequiredProps<TextFieldProps, BasePropsType>(props, <TextField />)
  return (
    <TextField {...requiredProps} multiline>
      {children}
    </TextField>
  )
}

const HtmlField = (props: TextFieldProps) => {
  const { children, label } = props
  // Remove anything the HTML field doesn't recognize
  const requiredProps = getRequiredProps<TextFieldProps, InputHTMLAttributes<HTMLTextAreaElement>>(
    props,
    <textarea />
  )
  return (
    <div>
      {label && (
        <>
          <label>{label}</label>&nbsp;&nbsp;&nbsp;
        </>
      )}
      <textarea {...requiredProps}>{children}</textarea>
    </div>
  )
}

export const TextArea = (props: TextFieldProps) => {
  return RenderingAgent({ html: HtmlField, mui: MuiField })(props)
}

/*
  // type TextAreaProps = Pick<
  //   InputHTMLAttributes<HTMLInputElement>,
  //   keyof InputHTMLAttributes<HTMLTextAreaElement>
  // >
  // type LessTextAreaProps = Exclude<TextAreaProps,LocalTextFieldProps>
//const textAreaProps = props as InputHTMLAttributes<HTMLTextAreaElement>
//  const textAreaProps = propSubset as LessTextAreaProps as InputHTMLAttributes<HTMLTextAreaElement>
  //const textAreaProps2 = filterProperties(props, textAreaProps);
const filteredProps = filterProperties(textAreaProps,sampleProps)
 */
