import { LabelProps, ReactProps } from '..'
//import CSS from 'csstype'
import { config } from '@root/app.config'

export const Label = (props: LabelProps) => {
  const reactProps = props as ReactProps
  //  const muiProps = props as MuiProps
  return (
      <label style={config.styles.formFieldLabel} {...reactProps} />
  )
}
