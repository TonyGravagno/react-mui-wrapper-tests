import { FormControlLabelProps, TextFieldProps as MuiProps } from '@mui/material'
import React from 'react'
import { Override } from './commonTypes'
export type { MuiProps }
export type ReactProps = React.JSX.IntrinsicElements['input']

export type LocalProps = {
  labelPlacement?: FormControlLabelProps['labelPlacement']
  variant?: MuiProps['variant']
  label?: MuiProps['label'] | JSX.Element
  margin?: Omit<MuiProps['margin'], 'normal'>
  id?: string
  name: string
}

export type TextFieldProps = Override<Override<ReactProps, MuiProps>, LocalProps>
