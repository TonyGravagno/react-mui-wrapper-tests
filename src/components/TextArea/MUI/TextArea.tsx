import { TextField as MuiTextField, TextFieldProps as MuiProps } from '@mui/material'
import { config } from '@root/app.config'
type ReactProps = React.JSX.IntrinsicElements['textarea']
type TextAreaProps = ReactProps & MuiProps

export const TextArea = (props: TextAreaProps) => {
  //TextAreaProps
  const muiProps = props as MuiProps

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
      {...muiProps}
    />
  )
}
