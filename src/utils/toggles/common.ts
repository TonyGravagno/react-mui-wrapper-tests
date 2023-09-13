import { config } from '@root/app.config'
import { CheckboxProps } from '@apptypes/toggle'
import { LabelForComponentOptions, getLabelForComponent } from '@components/FieldLabel'

import CSS from 'csstype'
export function getToggleSetting(value: any) {
  let isSet: boolean = false
  switch (
    value // probably CheckboxProps['value']
  ) {
    case 'on':
    case 'true':
    case 'checked':
    case 'yes':
    case '1':
    case 1:
    case true:
      isSet = true
      break
    case 'off':
    case 'false':
    case 'no':
    case '0':
    case 0:
    case undefined:
    case '':
    case false:
    default: // fall through to default, other details aren't really required
      isSet = false
      break
  }
  return isSet
}

export function getStyles(props: CheckboxProps) {
  const labelPlacement = props.labelPlacement

  let labelStyle: CSS.Properties = {}
  let inputStyle: CSS.Properties = {}
  let groupStyle: CSS.Properties = {}
  if (props.singleComponent) {
    groupStyle = config.styles.mui.toggleFieldControl
  } else {
    groupStyle = config.styles.mui.formFieldRow
  }
  switch (labelPlacement) {
    case 'top':
      labelStyle = config.styles.mui.toggleFieldLabelTop
      inputStyle = config.styles.mui.toggleFieldInputBottom
      break
    case 'bottom':
      labelStyle = config.styles.mui.toggleFieldLabelBottom
      inputStyle = config.styles.mui.toggleFieldInputTop
      break
    case 'start':
      labelStyle = config.styles.mui.toggleFieldLabelStart
      inputStyle = config.styles.mui.toggleFieldInputEnd
      break
    case 'end':
      labelStyle = config.styles.mui.toggleFieldLabelEnd
      inputStyle = config.styles.mui.toggleFieldInputStart
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

  return {
    labelComponent,
    groupStyle,
    inputStyle,
  }
}
