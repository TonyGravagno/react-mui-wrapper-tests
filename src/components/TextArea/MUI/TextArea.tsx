import { TextField as MuiTextField, TextFieldProps as MuiProps } from '@mui/material'
type ReactProps = React.JSX.IntrinsicElements['textarea']
type TextAreaProps = ReactProps | MuiProps

export const TextField = (props: TextAreaProps) => {
  const muiProps = props as MuiProps
  return (
    <MuiTextField
      type="textarea"
      id="unknown"
      name="unknown"
      size="medium"
      variant="standard"
      multiline
      maxRows={5}
      {...muiProps}
    />
  )
}
