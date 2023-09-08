import { NameValuePairs } from "./CommonTypes"


export interface Translatable<T extends string> {
  Type: string
  Messages: NameValuePairs<string>
  Labels: { [key in T]: string }
  Validation: NameValuePairs<string | RegExp>
}