import { config } from '@root/app.config'
import { Button as MuiButton } from '@mui/material'
import { ButtonProps } from '@apptypes/button'

export const SubmitButton = (props: ButtonProps) => {
  return (
    <MuiButton
      // provide defaults and let props override
      size={config.ui.button_size}
      variant={config.ui.button_variant}
      children={config.ui.submit_text}
      style={config.styles.mui.submitButton}
      {...props}
      // always override type
      type="submit"
    />
  )
}
