import { config } from '@root/app.config'
import { LabelProps, MuiProps } from '@apptypes/label'
import { InputLabel as MuiLabel } from '@mui/material'

export const Label = (props: LabelProps) => {
  const muiProps = props as MuiProps
  const style = muiProps.style ?? config.styles.current().formFieldLabel
  return <MuiLabel {...muiProps} style={style} />
}
