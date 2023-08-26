import { FormControlLabel, Checkbox as MuiCheckbox, CheckboxProps as MuiProps } from '@mui/material'
import { config } from '@root/app.config'
import { CheckboxProps } from '..'
import CSS from 'csstype'
import { LabelForComponentOptions, getLabelForComponent } from '@components/Label'

export const Checkbox = (props: CheckboxProps) => {
  const muiProps = props as MuiProps
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
    <FormControlLabel
      id={config.ui.id_name}
      name={config.ui.id_name}
      label={labelComponent}
      labelPlacement={labelPlacement}
      checked={isChecked}
      color={config.ui.checkboxColor}
      required={false}
      // style={config.styles.current().formFieldInput}
      control={
        <MuiCheckbox
          inputProps={{}}
          disableRipple={config.ui.checkboxDisableRipple}
          size={config.ui.text_size}
          indeterminate={false}
          {...muiProps}
          style={inputStyle}
        />
      }
    />
    // The props of the ButtonBase component are also available in Checkbox
    // You can take advantage of this to target nested components.
  )
}
// icon=<CheckBoxOutlineBlankIcon />
// checkedIcon=<CheckBoxIcon />
// indeterminateIcon=<IndeterminateCheckBoxIcon />
