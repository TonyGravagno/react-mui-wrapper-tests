import { config } from '@root/app.config'
import { TextAreaProps, ReactProps } from '@apptypes/textarea'
import { getLabelForComponent } from '@components/Label'

export const TextArea = (props: TextAreaProps) => {
  const labelComponent = getLabelForComponent(props.label)
  return (
    <div style={config.styles.current().formFieldRow}>
      {labelComponent}
      <textarea
        style={config.styles.current().formFieldInput}
        id={config.ui.id_name}
        name={config.ui.id_name}
        rows={config.ui.textarea_rows}
        minLength={config.ui.textarea_minLength}
        maxLength={config.ui.textarea_maxLength}
        {...(props as ReactProps)}
      />
    </div>
  )
}
