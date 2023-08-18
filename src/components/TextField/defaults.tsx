import * as D from './dependencies'

/**
 * https://mui.com/material-ui/react-text-field/
 */

export const MuiField = (props: D.TextFieldProps) => {
  return (
    <D.MuiTextField
      type="text"
      id="unknown"
      name="unknown"
      size="medium"
      variant="standard"
      {...props}
    />
  )
}

export const HtmlField = (props: D.Base['input']) => {
  return <input type="text" minLength={1} maxLength={80} id="unknown" name="unknown" {...props} />
}
