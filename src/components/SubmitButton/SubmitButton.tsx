import { Button as MuiButton } from '@mui/material'
import { SubmitButtonProps } from './types'
import { AppConfig } from '@utils/config'

/**
 * Consistent for all wrapped fields ?
 */

const Field = (props: any) => {
  const config = AppConfig()

  switch (config.ui.toolkit) {
    case 'html':
      return <HtmlField {...props} />
    case 'mui':
      return <MuiField {...props} />
    default:
      return null
  }
}

/**
 * Unique for every wrapped field
 */

export const SubmitButton = (props: SubmitButtonProps) => {
  return Field(props)
}

const MuiField = (props: SubmitButtonProps) => {
  return <MuiButton {...props} />
}

const HtmlField = (props: SubmitButtonProps) => {
  return <button {...props} />
}
