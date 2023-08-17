import * as D from './dependencies'
export type LabelType = D.Base['label']
export function Label(props : any) {
  let theLabel = props?.label?.props?.children || props?.label || props?.children
  return theLabel ? (
    <>
      <label>{theLabel}</label>&nbsp;&nbsp;
    </>
  ) : null
}
