import { ButtonProps as MuiProps } from '@mui/material'
import { config } from '@root/app.config'
type ReactProps = React.JSX.IntrinsicElements['button']
type SubmitButtonProps = ReactProps & MuiProps

export const SubmitButton = (props: SubmitButtonProps) => {
  const reactProps = props as ReactProps
  //  const muiProps = props as MuiProps
  return (
    <button
      type="submit"
      id={config.ui.id_name}
      name={config.ui.id_name}
      {...reactProps}
      style={config.styles.react.submitButton}
    >
      {props.children ?? config.ui.submit_text}
    </button>
  )
}
