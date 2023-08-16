import { InputHTMLAttributes } from 'react'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material'

export type BasePropsType = InputHTMLAttributes<HTMLInputElement> & MuiTextFieldProps

export type LocalTextFieldProps = {
  canResize?: boolean
}

export type TextFieldProps = BasePropsType & LocalTextFieldProps
