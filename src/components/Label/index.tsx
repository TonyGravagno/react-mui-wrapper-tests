import { config } from '@root/app.config'
import { Label as C1 } from './MUI/Label'
import { Label as C2 } from './React/Label'
import { LabelProps } from '@apptypes/label'

let C0: (props: LabelProps) => JSX.Element
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
export const Label = C0

export type LabelForComponentOptions = {
  props?: LabelProps
}
export const getLabelForComponent = (
  field: React.ReactNode,
  options?: LabelForComponentOptions
) => {
  const type = typeof field
  switch (type) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
      return <Label {...(options?.props ?? {})}>{field}</Label>
    case 'function':
    case 'object':
    case 'symbol':
      return field
    case 'undefined':
      return null
    default:
      throw new Error('Unknown label type')
  }
}
