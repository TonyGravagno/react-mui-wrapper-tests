import { config } from '@root/app.config'
import { ReactProps, SubmitButtonProps } from '..'

export const SubmitButton = (props: SubmitButtonProps) => {
  const reactProps = props as ReactProps
  return (
    <button
      type="submit"
      id={config.ui.id_name}
      name={config.ui.id_name}
      {...reactProps}
      style={config.styles.current().submitButton}
    >
      {props.children ?? config.ui.submit_text}
    </button>
  )
}
