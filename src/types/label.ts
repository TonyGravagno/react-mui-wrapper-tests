import { InputLabelProps as MuiProps } from '@mui/material'

export type {MuiProps}
export type ReactProps = React.JSX.IntrinsicElements['label']
export type LabelProps = ReactProps & MuiProps
