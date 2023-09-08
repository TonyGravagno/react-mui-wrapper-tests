import { config } from '@root/app.config'
import { TextFieldProps, ReactProps } from '@apptypes/input'
import { getLabelForComponent } from '@components/Label'

export const TextField = (props: TextFieldProps) => {
  const labelComponent = getLabelForComponent(props.label)
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
        {...props as ReactProps}
      />
    </div>
  )
}
