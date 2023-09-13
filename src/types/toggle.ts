import { FormControlLabelProps, CheckboxProps as MuiProps } from '@mui/material'
import { Override } from './CommonTypes'

type LocalProps = {
  label?: React.ReactNode
  labelPlacement?: FormControlLabelProps['labelPlacement']
  singleComponent?: boolean
  value?: boolean // Only boolean here
  name: string
}

export type CheckboxProps = Override<MuiProps, LocalProps>
// type Lvalue = LocalProps['value']
// Omit<LocalProps, 'value'> & {
  //   value: MergedValue
  // }
