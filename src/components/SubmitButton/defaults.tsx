import * as D from './dependencies'

/**
 * https://mui.com/material-ui/react-button/
 */

export const MuiField = (props: D.SubmitButtonProps) => {
  return (
    <D.MuiButton
      type="submit"
      id="unknown"
      name="unknown"
      size="medium"
      variant="contained"
      {...props}
    >
      Click Me
    </D.MuiButton>
  )
}

export const HtmlField = (props: D.Base['button']) => {
  return (
    <button type="submit" id="unknown" name="unknown" {...props}>
      Click Me
    </button>
  )
}
