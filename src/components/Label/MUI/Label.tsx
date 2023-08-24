import { LabelProps, MuiProps } from '..'
import { InputLabel as MuiLabel } from '@mui/material'
import { config } from '@root/app.config'
export const Label = (props: LabelProps) => {
  //  const reactProps = props as ReactProps
  const muiProps = props as MuiProps
  const style = muiProps.style ?? config.styles.current().formFieldLabel
  return <MuiLabel {...muiProps} style={style} />
}
