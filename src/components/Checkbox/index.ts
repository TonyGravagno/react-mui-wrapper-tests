import { config } from '@root/app.config'
import { Checkbox as C1 } from './MUI/Checkbox'
import { Checkbox as C2 } from './React/Checkbox'

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
type MergedValue = Rvalue | Lvalue // there is no MUI 'value'
export type CheckboxProps = Omit<ReactProps, 'value'> &
  Omit<MuiProps, 'value'> &
  Omit<LocalProps, 'value'> & {
    value: MergedValue
  }
const test: CheckboxProps['value'] = false
let C0
switch (config.ui.toolkit) {
  case 'mui':
    C0 = C1
    break
  case 'react':
    C0 = C2
    break
  default:
    throw new Error(`Invalid toolkit ${config.ui.toolkit} ${test}`)
    break
}
export const Checkbox = C0
