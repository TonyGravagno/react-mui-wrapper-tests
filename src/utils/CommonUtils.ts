import z, { ZodRawShape } from 'zod'

/** This is just an example showing how to accept a shape,
 * and how to return a schema based on that shape.
 * More generally, S would be z.ZodObject<any,any,any>
 */
export const getSchema = <S extends ZodRawShape>(shape: S) => {
  const schema = z.object(shape)
  return schema
}


export function convertCaseDelimitedToSpaceDelimited(text : string) {
  return text.replace(/([A-Z])/g, ' $1').trim()
}