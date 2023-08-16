import { ButtonHTMLAttributes } from 'react'
import { ButtonProps as MuiButtonProps } from '@mui/material'

export type BasePropsType = ButtonHTMLAttributes<HTMLButtonElement> & MuiButtonProps

export type LocalSubmitButtonProps = {}

export type SubmitButtonProps = BasePropsType & LocalSubmitButtonProps
