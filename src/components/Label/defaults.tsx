import * as D from './dependencies'

/**
 * https://mui.com/material-ui/api/input-label/
 */

export const MuiField = (props: D.MuiInputLabelProps) => {
  return <D.MuiInputLabel {...props} />
}

export const HtmlField = (props: D.Base['label']) => {
  return <label {...props} />
}
