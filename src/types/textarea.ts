import { FormControlLabelProps, TextFieldProps as MuiProps } from '@mui/material'

type LocalProps = {
  label?: React.ReactNode
  labelPlacement?: FormControlLabelProps['labelPlacement']
}
export type TextAreaProps = MuiProps & LocalProps
