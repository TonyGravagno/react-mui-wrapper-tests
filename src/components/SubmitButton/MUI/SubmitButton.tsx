import { Button as MuiButton, ButtonProps as MuiProps } from '@mui/material'
type ReactProps = React.JSX.IntrinsicElements['button']
type SubmitButtonProps = ReactProps & MuiProps

export const SubmitButton = (props: SubmitButtonProps) => {
//  const reactProps = props as ReactProps
  const muiProps = props as MuiProps
  return (
    <MuiButton
      type="submit"
      id="unknown"
      name="unknown"
      size="medium"
      variant="contained"
      children="Click it!"
      {...muiProps}
    />
  )
}
