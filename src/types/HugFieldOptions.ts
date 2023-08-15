import {
  ButtonTypeMap as MuiButtonTypeMap,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import { Control } from 'react-hook-form'
import { ZodSchema } from 'zod'

export type HugTextFieldOptions = {
  tfB?: boolean
  tfS?: string
  // ...
}

export type HugFieldOptions = {
  // Anything specific to this library
  fB?: boolean
  fS?: string
  // ...
}

export type HugOptions = {
  // Anything specific to this library
  allB?: boolean
  allS?: string
  // ...
}

export type HugTextFieldProps = MuiTextFieldProps & {
  name: string
  textOptions?: HugTextFieldOptions | null
  fieldOptions?: HugFieldOptions | null
  allOptions?: HugOptions | null
  control?: Control
  validationSchema?: ZodSchema<any>
}

export type HugSubmitButtonOptions = {
  sbB?: boolean
  sbS?: string
  buttonTypeMap?: MuiButtonTypeMap
  // ...
}

export type HugSubmitButtonProps = {
  buttonOptions?: HugSubmitButtonOptions | null
  label?: string
  allOptions?: HugOptions | null
  control?: Control
  defaultComponent?: string
}
