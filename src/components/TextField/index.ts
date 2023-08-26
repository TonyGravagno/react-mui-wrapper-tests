import { config } from '@root/app.config'
import { MuiProps } from '..'
import { TextField as C1 } from './MUI/TextField'
import { TextField as C2 } from './React/TextField'

export type { TextFieldProps as MuiProps } from '@mui/material'
export type ReactProps = React.JSX.IntrinsicElements['input']
export type TextFieldProps = ReactProps & MuiProps

let C0
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
export const TextField = C0
