import { TextFieldProps as MuiProps } from '@mui/material'
import { config } from '@root/app.config'
//const config = AppConfig()
type ReactProps = React.JSX.IntrinsicElements['textarea']
type TextAreaProps = ReactProps & MuiProps

export const TextArea = (props: TextAreaProps) => {
  const reactProps = props as ReactProps
  const muiProps = props as MuiProps
  const labelComponent = muiProps.label ? <label>{muiProps.label}</label> : null
  return (
    <div>
      {labelComponent ?? null}
      <textarea
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
