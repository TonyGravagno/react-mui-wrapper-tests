//import { FormControlLabelProps, CheckboxProps as MuiProps } from '@mui/material'
import { LabelForComponentOptions, getLabelForComponent } from '@components/Label'
import { config } from '@root/app.config'
import CSS from 'csstype'
import { CheckboxProps, ReactProps } from '..'

export const Checkbox = (props: CheckboxProps) => {
  const reactProps = props as ReactProps
  const lValue = props.value
  const labelPlacement = props.labelPlacement
  let isChecked = false
  switch (lValue) {
    case 'on':
    case 'true':
    case 'checked':
    case 'yes':
    case '1':
    case 1:
    case true:
      isChecked = true
      break
    case 'off':
    case 'false':
    case 'no':
    case '0':
    case 0:
    case undefined:
    case '':
    case false:
    default:
      isChecked = false
      break
  }
  let labelStyle: CSS.Properties = {}
  let inputStyle: CSS.Properties = {}
  let groupStyle: CSS.Properties = {}
  if (props.singleComponent) {
    groupStyle = config.styles.current().toggleFieldControl
  } else {
    groupStyle = config.styles.current().formFieldRow
  }
  switch (labelPlacement) {
    case 'top':
      labelStyle = config.styles.current().toggleFieldLabelTop
      inputStyle = config.styles.current().toggleFieldInputBottom
      break
    case 'bottom':
      labelStyle = config.styles.current().toggleFieldLabelBottom
      inputStyle = config.styles.current().toggleFieldInputTop
      break
    case 'start':
      labelStyle = config.styles.current().toggleFieldLabelStart
      inputStyle = config.styles.current().toggleFieldInputEnd
      break
    case 'end':
      labelStyle = config.styles.current().toggleFieldLabelEnd
      inputStyle = config.styles.current().toggleFieldInputStart
      break
    default:
      throw new Error(`Invalid label placement code "${labelPlacement}"`)
  }
  const labelProps: LabelForComponentOptions = {
    props: {
      style: labelStyle,
    },
  }
  const labelComponent = getLabelForComponent(props.label, labelProps)

  return (
    <div style={groupStyle}>
      {labelPlacement == 'start' ? <>{labelComponent}</> : null}
      <span>
        {labelPlacement == 'top' ? (
          <>
            {labelComponent} <br />
          </>
        ) : null}
        <span style={inputStyle}>
          <input
            type="checkbox"
            id={config.ui.id_name}
            name={config.ui.id_name}
            {...reactProps}
            checked={isChecked}
          />
        </span>
        {labelPlacement == 'bottom' ? (
          <>
            <br /> {labelComponent}
          </>
        ) : null}
      </span>
      {labelPlacement == 'end' ? <>{labelComponent}</> : null}
    </div>
  )
  // config.styles.current().formFieldInput
}
