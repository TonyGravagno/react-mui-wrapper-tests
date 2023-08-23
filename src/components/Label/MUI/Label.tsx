import { LabelProps, MuiProps } from '..'
import { InputLabel as MuiLabel } from '@mui/material'
export const Label = (props: LabelProps) => {
  //  const reactProps = props as ReactProps
  const muiProps = props as MuiProps
  return <MuiLabel {...muiProps} />
}
