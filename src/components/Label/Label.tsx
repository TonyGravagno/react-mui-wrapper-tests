import * as D from './dependencies'

/**
 * https://mui.com/material-ui/api/input-label/
 */

const MuiField = (props: D.MuiInputLabelProps) => {
  return <D.Default.MuiField {...props} />
}

const HtmlField = (props: any) => { // D.LabelProps
  let theLabel = props?.label?.props?.children || props?.label || props?.children
  return theLabel ? (
    <>
      <D.Default.HtmlField>{theLabel}</D.Default.HtmlField>&nbsp;&nbsp;
    </>
  ) : null
}

/**
 * Wrapper for React Label, and MUI InputLabel which is nested in TextField
 * @param props
 * @returns
 */
export const Label = (props: any) => { // D.LabelProps
  return D.RenderingAgent({ html: HtmlField, mui: MuiField })(props)

}
