import { config } from '@root/app.config'
import { LabelProps, ReactProps } from '@apptypes/label'

export const Label = (props: LabelProps) => {
  return <label style={config.styles.current().formFieldLabel} {...(props as ReactProps)} />
}
