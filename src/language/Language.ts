export interface Translatable<
  FieldNameKeys extends string,
  MessageKeys extends string,
  ValidationKeys extends string
> {
  Type: string
  Messages: { [key in MessageKeys]: string }
  Labels: { [key in FieldNameKeys]: string }
  Validation: { [key in ValidationKeys]: string | RegExp }
}

// export let AllTranslatableText: Record<string, TranslatableData<IData<IValidation>>> = {}

// export const saveTranslatableText = (text: TranslatableData<IData<IValidation>>): void => {
//   AllTranslatableText[text.Type] = text
// }

// type Errors<E extends Entity<T>,T>

// export interface TranslatableX {
//   Type: string
//   Messages: NameValuePairs<string>
//   Labels: NameValuePairs<string>
//   Validation: NameValuePairs<string | RegExp>
// }
