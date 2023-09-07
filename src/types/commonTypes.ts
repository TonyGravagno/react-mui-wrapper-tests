import { BaseSyntheticEvent } from 'react'

export type RhfSubmitEvent = BaseSyntheticEvent<object, any, any>
export interface NameValuePairs<T> extends Record<string, T> {}

export type AppPage = () => React.ReactNode



export type ExcludeProperties<Base, Exclusions> = Pick<
  Base,
  Exclude<keyof Base, keyof Exclusions>
> &
  Pick<Exclusions, Extract<keyof Exclusions, keyof Base>>

export type Override<T1, T2> = Omit<T1, keyof T2> & T2
