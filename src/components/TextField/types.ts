import { InputHTMLAttributes } from 'react'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material'

export type LocalTextFieldProps = {
}
export type TextFieldProps = {} &
InputHTMLAttributes<HTMLInputElement> &
MuiTextFieldProps &
LocalTextFieldProps
