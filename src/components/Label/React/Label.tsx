import { InputLabelProps as MuiProps } from '@mui/material'
type ReactProps = React.JSX.IntrinsicElements['label']
type LabelProps = ReactProps | MuiProps

export const Label = (props: LabelProps) => {
  const reactProps = props as ReactProps
//  const muiProps = props as MuiProps
  return (
    <label {...reactProps} />
  )
}
