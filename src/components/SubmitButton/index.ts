import { config } from '@root/app.config'
import { SubmitButton as C1 } from './MUI/SubmitButton'
import { SubmitButton as C2 } from './React/SubmitButton'

let C0
switch (config.ui.toolkit) {
  case 'mui':
    C0 = C1
    break
  case 'react':
    C0 = C2
    break
  default:
    throw new Error(`Invalid toolkit ${config.ui.toolkit}`)
    break
}
export const SubmitButton = C0