import { FormControlLabelProps, TextFieldProps as MuiProps } from '@mui/material'

export type {MuiProps}
export type ReactProps = React.JSX.IntrinsicElements['input']
type LocalProps = {
  label?: React.ReactNode
  labelPlacement?: FormControlLabelProps['labelPlacement']
}
export type TextFieldProps = ReactProps & MuiProps & LocalProps
