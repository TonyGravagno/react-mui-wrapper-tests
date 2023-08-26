import { config } from '@root/app.config'
import { LabelProps, ReactProps } from '..'

export const Label = (props: LabelProps) => {
  const reactProps = props as ReactProps
  return <label style={config.styles.current().formFieldLabel} {...reactProps} />
}
