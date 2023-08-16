import { InputHTMLAttributes } from 'react'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material'

export type LocalTextFieldProps = {
  canResize?: boolean
}
export type TextFieldProps = {} &
InputHTMLAttributes<HTMLInputElement> &
MuiTextFieldProps &
LocalTextFieldProps
