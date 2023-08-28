import { config } from '@root/app.config'
import { TextAreaProps, MuiProps } from '@apptypes/textarea'
import { TextField as MuiTextField } from '@mui/material'

export const TextArea = (props: TextAreaProps) => {
  return (
    <MuiTextField
      multiline
      type="textarea"
      id={config.ui.id_name}
      name={config.ui.id_name}
      size={config.ui.text_size}
      variant={config.ui.text_variant}
      rows={config.ui.textarea_rows}
      maxRows={config.ui.textarea_maxRows}
      style={config.styles.current().formFieldInput}
      {...(props as MuiProps)}
    />
  )
}
