import { config } from '@root/app.config'
import { MuiProps, SubmitButtonProps } from '..'
import { Button as MuiButton } from '@mui/material'

export const SubmitButton = (props: SubmitButtonProps) => {
  const muiProps = props as MuiProps
  return (
    <MuiButton
      type="submit"
      id={config.ui.id_name}
      name={config.ui.id_name}
      size={config.ui.button_size}
      variant={config.ui.button_variant}
      children={config.ui.submit_text}
      style={config.styles.current().submitButton}
      {...muiProps}
    />
  )
}
