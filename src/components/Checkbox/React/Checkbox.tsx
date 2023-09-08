import { config } from '@root/app.config'
import { ReactProps, CheckboxProps } from '@apptypes/toggle'
import { getStyles, toggleSetting } from '@utils/toggles/common'

export const Checkbox = (props: CheckboxProps) => {
  const labelPlacement = props.labelPlacement
  const { inputStyle, groupStyle, labelComponent } = getStyles(props)

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
            {...(props as ReactProps)}
            checked={toggleSetting(props.value)}
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
}
