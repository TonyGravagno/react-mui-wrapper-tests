import * as D from './dependencies'

/**
 * https://mui.com/material-ui/react-text-field/
 */

export const MuiField = (props: D.TextFieldProps) => {
  return (
    <D.MuiTextField
      type="textarea"
      id="unknown"
      name="unknown"
      size="medium"
      variant="standard"
      multiline
      maxRows={5}
      {...props}
    />
  )
}

export const HtmlField = (props: D.Base['textarea']) => {
  return <textarea rows={2} minLength={1} maxLength={2000} id="unknown" name="unknown" {...props} />
}
