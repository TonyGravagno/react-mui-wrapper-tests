import Button from '@mui/material/Button'
import { HugSubmitButtonProps } from '../types/HugFieldOptions'

export function HugSubmitButton(props: HugSubmitButtonProps) {
  const { buttonOptions, label = 'Submit' } = props
  // Not used yet: , allOptions, control, defaultComponent

  const submitButtonProps = {
    ...buttonOptions?.buttonTypeMap?.props,
    color: buttonOptions?.buttonTypeMap?.props?.color ?? 'primary',
    variant: buttonOptions?.buttonTypeMap?.props?.variant ?? 'contained',
  }

  return (
    <div className="hugSubmitButton">
      <Button type="submit" {...submitButtonProps}>
        {label}
      </Button>
    </div>
  )
}

