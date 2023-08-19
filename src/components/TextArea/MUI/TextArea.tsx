import { TextField as MuiTextField, TextFieldProps as MuiProps } from '@mui/material'
import { AppConfig } from '@utils/config'
const config = AppConfig()
type ReactProps = React.JSX.IntrinsicElements['textarea']
type TextAreaProps = ReactProps & MuiProps

export const TextArea = (props: TextAreaProps) => {
  //TextAreaProps
  const muiProps = props as MuiProps

  return (
    <MuiTextField
      multiline
      type="textarea"
      id="unknown"
      name="unknown"
      size={config.ui.text_size}
      variant={config.ui.text_variant}
      maxRows={config.ui.textarea_maxRows}
      {...muiProps}
    />
  )
}
