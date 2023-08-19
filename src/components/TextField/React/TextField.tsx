import { TextFieldProps as MuiProps } from '@mui/material'
import { AppConfig } from '@utils/config'
const config = AppConfig()
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
        id="unknown"
        name="unknown"
        {...reactProps}
      />
    </div>
  )
}
