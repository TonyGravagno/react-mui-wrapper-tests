import * as D from './dependencies'

/**
 * https://mui.com/material-ui/react-button/
 */
const config = D.AppConfig()

const defaults: D.SubmitButtonProps = {
  type: 'submit',
  size: 'medium',
  variant: 'contained',
  children: 'Click it!',
}

const MuiField = (props: D.SubmitButtonProps) => {
  return <D.MuiButton {...defaults} {...props} />
}

const HtmlField = (props: D.SubmitButtonProps) => {
  const newProps = D.getRequiredProps<D.SubmitButtonProps, D.Base['button']>(
    { ...defaults, ...props },
    <button />
  )
  return <button {...newProps}>{props.children ?? defaults.children}</button>
}

export const SubmitButton = (props: D.SubmitButtonProps) => {
  return D.RenderingAgent({ html: HtmlField, mui: MuiField })({ ...props })
}
