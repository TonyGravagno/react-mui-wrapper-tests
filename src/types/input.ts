import { FormControlLabelProps, TextFieldProps as MuiProps } from '@mui/material'
import React from 'react'

export type {MuiProps}
export type ReactProps = React.JSX.IntrinsicElements['input']
type LocalProps = {
  labelPlacement?: FormControlLabelProps['labelPlacement']
}
export type TextFieldProps =Omit< ReactProps,'label'> & MuiProps & LocalProps