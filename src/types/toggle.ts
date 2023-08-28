import { FormControlLabelProps, CheckboxProps as MuiProps } from '@mui/material'

export type ReactProps = React.JSX.IntrinsicElements['input']
type LocalProps = {
  label: React.ReactNode
  labelPlacement: FormControlLabelProps['labelPlacement']
  singleComponent: boolean
  value: boolean | 'x' // Only boolean here
}
type Rvalue = ReactProps['value']
type Lvalue = LocalProps['value']
export type MergedValue = Rvalue | Lvalue // there is no MUI 'value'
export type CheckboxProps = Omit<ReactProps, 'value'> &
  Omit<MuiProps, 'value'> &
  Omit<LocalProps, 'value'> & {
    value: MergedValue
  }
