import { TextField as MuiTextField, TextFieldProps as MuiProps } from '@mui/material'
import { config } from '@root/app.config'
type ReactProps = React.JSX.IntrinsicElements['input']
type TextFieldProps = ReactProps & MuiProps

export const TextField = (props: TextFieldProps) => {
  const muiProps = props as MuiProps
  return (
    <MuiTextField
      type="text"
      id={config.ui.id_name}
      name={config.ui.id_name}
      size={config.ui.text_size}
      variant={config.ui.text_variant}
      {...muiProps}
    />
  )
}
