import { InputHTMLAttributes } from 'react'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material'

export type TextFieldProps = {
  // add params here as required
} & InputHTMLAttributes<HTMLInputElement> &
  MuiTextFieldProps
