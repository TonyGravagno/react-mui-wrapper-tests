import { TextField as MuiTextField, TextFieldProps as MuiProps } from '@mui/material'
type ReactProps = React.JSX.IntrinsicElements['input']
type TextFieldProps = ReactProps & MuiProps

export const TextField = (props: TextFieldProps) => {
  const muiProps = props as MuiProps
  return (
    <MuiTextField
      type="text"
      id="unknown"
      name="unknown"
      size="medium"
      variant="standard"
      {...muiProps}
    />
  )
}
