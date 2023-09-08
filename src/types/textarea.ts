import { FormControlLabelProps, TextFieldProps as MuiProps } from '@mui/material'

export type {MuiProps}
export type ReactProps = React.JSX.IntrinsicElements['textarea']
type LocalProps = {
  label?: React.ReactNode
  labelPlacement?: FormControlLabelProps['labelPlacement']
}
export type TextAreaProps = ReactProps & MuiProps & LocalProps
