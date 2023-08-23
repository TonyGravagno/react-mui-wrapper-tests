export type { InputLabelProps as MuiProps } from '@mui/material'
import { MuiProps } from '..' // get it from 'myself'
export type ReactProps = React.JSX.IntrinsicElements['label']
export type LabelProps = ReactProps & MuiProps

import { config } from '@root/app.config'
import { Label as C1 } from './MUI/Label'
import { Label as C2 } from './React/Label'

let C0: (props: LabelProps) => JSX.Element
switch (config.ui.toolkit) {
  case 'mui':
    C0 = C1
    break
  case 'react':
    C0 = C2
    break
  default:
    throw new Error(`Invalid toolkit ${config.ui.toolkit}`)
    break
}
export const Label = C0
