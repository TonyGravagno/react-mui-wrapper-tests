import { Button as MuiButton, ButtonProps as MuiProps } from '@mui/material'
import { config } from '@root/app.config'
type ReactProps = React.JSX.IntrinsicElements['button']
type SubmitButtonProps = ReactProps & MuiProps

export const SubmitButton = (props: SubmitButtonProps) => {
//  const reactProps = props as ReactProps
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
