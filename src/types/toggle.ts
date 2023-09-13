import { FormControlLabelProps, CheckboxProps as MuiProps } from '@mui/material'

type LocalProps = {
  label: React.ReactNode
  labelPlacement?: FormControlLabelProps['labelPlacement']
  singleComponent?: boolean
  value: boolean // Only boolean here
}
export type CheckboxProps = MuiProps & LocalProps
// type Lvalue = LocalProps['value']
// Omit<LocalProps, 'value'> & {
  //   value: MergedValue
  // }
