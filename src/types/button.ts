// Use some of this if props need to be modified
//import { ButtonProps as MuiProps } from '@mui/material'
//import { Override } from './CommonTypes'
//export type LocalProps = {}
//export type ButtonProps = MuiProps // Override<MuiProps, LocalProps>

// If props don't need to be modified, just pass them along here.
// This redirection allows for redefinition of button props without
// changing forms from @mui to here later.
export type {ButtonProps} from '@mui/material'
