import { LabelProps, ReactProps } from '..'
import CSS from 'csstype'
const spanStyle: CSS.Properties = {
  marginRight: '23px',
  verticalAlign: 'text-bottom',
  color: 'blue',
}
export const Label = (props: LabelProps) => {
  const reactProps = props as ReactProps
  //  const muiProps = props as MuiProps
  return (
    <span style={spanStyle}>
      <label {...reactProps} />
    </span>
  )
}
