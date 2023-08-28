import { config } from '@root/app.config'
import { TextFieldProps, MuiProps } from '@apptypes/input'
import { TextField as MuiTextField } from '@mui/material'

export const TextField = (props: TextFieldProps) => {
  console.dir({ textfield: props as MuiProps })
  console.dir({ formFieldInput: config.styles.current().formFieldInput })
  console.dir({ label: props.label })
  return (
    <MuiTextField
      type="text"
      id={config.ui.id_name}
      name={config.ui.id_name}
      size={config.ui.text_size}
      variant={config.ui.text_variant}
      {...(props as MuiProps)}
      style={config.styles.current().formFieldInput}
    />
  )
}
