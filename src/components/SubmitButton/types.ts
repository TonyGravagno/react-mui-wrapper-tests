import { ButtonHTMLAttributes } from 'react'
import { ButtonProps as MuiButtonProps } from '@mui/material'

export type SubmitButtonProps = {
  // add params here as required
} & ButtonHTMLAttributes<HTMLButtonElement> &
  MuiButtonProps
