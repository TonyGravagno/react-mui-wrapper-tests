import { config } from '@root/app.config'
import { TextFieldProps, MuiProps } from '@apptypes/input'
import { TextField as MuiTextField } from '@mui/material'

export const TextField = (props: TextFieldProps) => {
  const muiProps = props as MuiProps
  console.dir(muiProps)
  console.dir(config.styles.current().formFieldInput)
  return (
    <MuiTextField
      type="text"
      id={config.ui.id_name}
      name={config.ui.id_name}
      size={config.ui.text_size}
      variant={config.ui.text_variant}
      {...muiProps}
      style={config.styles.current().formFieldInput}
    />
  )
}
