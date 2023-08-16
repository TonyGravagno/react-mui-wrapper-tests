import { Button as MuiButton } from '@mui/material'
import { BasePropsType, SubmitButtonProps } from './types'
import { RenderingAgent } from '@utils/RenderingAgent'
import { getRequiredProps } from '@utils/filterProperties'
import { ButtonHTMLAttributes } from 'react'

/**
 * https://mui.com/material-ui/react-button/
 */

const MuiField = (props: SubmitButtonProps) => {
  const children = props.children || null
  // Remove anything the MUI field doesn't recognize
  const requiredProps = getRequiredProps<SubmitButtonProps, BasePropsType>(props, <MuiButton />)
  return <MuiButton {...requiredProps}>{children}</MuiButton>
}

const HtmlField = (props: SubmitButtonProps) => {
  const children = props.children || null
  // Remove anything the HTML field doesn't recognize
  const requiredProps = getRequiredProps<
    SubmitButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement>
  >(props, <button />)
  return <button {...requiredProps}>{children}</button>
}

export const SubmitButton = (props: SubmitButtonProps) => {
  return RenderingAgent({ html: HtmlField, mui: MuiField })({ ...props, type: 'submit' })
}
