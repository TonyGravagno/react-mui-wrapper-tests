import { TextFieldProps as MuiProps } from '@mui/material'
import { config } from '@root/app.config'
type ReactProps = React.JSX.IntrinsicElements['input']
type TextFieldProps = ReactProps & MuiProps

export const TextField = (props: TextFieldProps) => {
  const reactProps = props as ReactProps
  const muiProps = props as MuiProps
  const labelComponent = muiProps.label ? <label>{muiProps.label}</label> : null
  return (
    <div>
      {labelComponent ?? null}
      <input
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
