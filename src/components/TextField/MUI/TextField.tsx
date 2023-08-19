import { TextField as MuiTextField, TextFieldProps as MuiProps } from '@mui/material'
import { AppConfig } from '@utils/config'
const config = AppConfig()
type ReactProps = React.JSX.IntrinsicElements['input']
type TextFieldProps = ReactProps & MuiProps

export const TextField = (props: TextFieldProps) => {
  const muiProps = props as MuiProps
  return (
    <MuiTextField
      type="text"
      id="unknown"
      name="unknown"
      size={config.ui.text_size}
      variant={config.ui.text_variant}
      {...muiProps}
    />
  )
}
