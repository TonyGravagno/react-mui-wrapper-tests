import { config } from '@root/app.config'
import { TextArea as C1 } from './MUI/TextArea'
import { TextArea as C2 } from './React/TextArea'

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
export const TextArea = C0
