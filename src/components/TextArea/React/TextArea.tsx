import { TextFieldProps as MuiProps } from '@mui/material'
import { getLabelForComponent } from '@components/Label'
import { config } from '@root/app.config'

type ReactProps = React.JSX.IntrinsicElements['textarea']
type TextAreaProps = ReactProps & MuiProps

export const TextArea = (props: TextAreaProps) => {
  const reactProps = props as ReactProps
  const muiProps = props as MuiProps
  const labelComponent = getLabelForComponent(muiProps.label)
  return (
    <div style={config.styles.formFieldRow}>
      {labelComponent}
      <textarea style={config.styles.formFieldInput}
        id={config.ui.id_name}
        name={config.ui.id_name}
        rows={config.ui.textarea_rows}
        minLength={config.ui.textarea_minLength}
        maxLength={config.ui.textarea_maxLength}
        {...reactProps}
      />
    </div>
  )
}
