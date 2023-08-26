import { config } from '@root/app.config'
import { TextFieldProps, MuiProps, ReactProps } from '..'
import { getLabelForComponent } from '@components/Label'

export const TextField = (props: TextFieldProps) => {
  const reactProps = props as ReactProps
  const muiProps = props as MuiProps
  const labelComponent = getLabelForComponent(muiProps.label)
  return (
    <div style={config.styles.current().formFieldRow}>
      {labelComponent}
      <input
        style={config.styles.current().formFieldInput}
        type="text"
        minLength={config.ui.input_minLength}
        maxLength={config.ui.input_maxLength}
        id={config.ui.id_name}
        name={config.ui.id_name}
        {...reactProps}
      />
    </div>
  )
}
