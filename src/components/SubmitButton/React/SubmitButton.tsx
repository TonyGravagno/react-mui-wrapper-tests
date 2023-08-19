import { ButtonProps as MuiProps } from '@mui/material'
type ReactProps = React.JSX.IntrinsicElements['button']
type SubmitButtonProps = ReactProps & MuiProps

export const SubmitButton = (props: SubmitButtonProps) => {
  const reactProps = props as ReactProps
  //  const muiProps = props as MuiProps
  return (
    <button type="submit" id="unknown" name="unknown" {...reactProps}>
      Click Me
    </button>
  )
}
