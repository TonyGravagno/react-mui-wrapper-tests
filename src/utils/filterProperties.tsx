export function filterProperties<T extends object, U extends Partial<Record<keyof T, any>>>(
  obj: T,
  template: U
): U {
  const result: Partial<U> = {}
  for (const key in template) {
    if (key in obj) {
      (result as any)[key] = (obj as any)[key]
    }
  }
  return result as U
}

export function getRequiredProps<FromType extends object,ToType extends Object >(
  props: FromType,
  sample: JSX.Element
): ToType {
  const sampleProps = sample.props
  const requiredProps = filterProperties(props, sampleProps)
  return requiredProps
}
