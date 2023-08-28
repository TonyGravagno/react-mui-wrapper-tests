import { MergedValue } from '../../types/toggle'
import { config } from '@root/app.config'
import { CheckboxProps } from '@apptypes/toggle'
import { LabelForComponentOptions, getLabelForComponent } from '@components/Label'

import CSS from 'csstype'
export function toggleSetting(lValue: MergedValue) {
  let isSet: boolean = false
  switch (lValue) {
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
    default:
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

  return {
    labelComponent,
    groupStyle,
    inputStyle,
  }
}
