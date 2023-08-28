import { config } from '@root/app.config'
import { FormControlLabel, Checkbox as MuiCheckbox, CheckboxProps as MuiProps } from '@mui/material'
import { CheckboxProps } from '@apptypes/toggle'
import { getStyles, toggleSetting } from '@utils/toggles/common'

export const Checkbox = (props: CheckboxProps) => {
  const { inputStyle, labelComponent } = getStyles(props)

  return (
    <FormControlLabel
      id={config.ui.id_name}
      name={config.ui.id_name}
      label={labelComponent}
      labelPlacement={props.labelPlacement}
      checked={toggleSetting(props.value)}
      color={config.ui.checkboxColor}
      required={false}
      // style={config.styles.current().formFieldInput}
      control={
        <MuiCheckbox
          inputProps={{}}
          disableRipple={config.ui.checkboxDisableRipple}
          size={config.ui.text_size}
          indeterminate={false}
          {...(props as MuiProps)}
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
