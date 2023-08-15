import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'

import { HugTextFieldProps } from '../types/HugFieldOptions'

export function HugTextField(props: HugTextFieldProps) {
  const {
    textOptions,
    fieldOptions,
    allOptions,
    name,
    control,
    validationSchema,
    ...textFieldProps
  } = props

  // Process hugfield and hugall if needed
  // ...

  // Retrieve state from Zustand store
  //  const someState = useStore(state => state.someState)

  // Define validation rule using Zod, if provided
  const validate = validationSchema
    ? (value: any) => validationSchema.safeParse(value).success
    : undefined

  return (
    <div className="hugTextField">
      <Controller
        name={name}
        control={control}
        rules={{ validate }}
        render={({ field }) =>
         <TextField {...field} {...textFieldProps} />}
      />
    </div>
  )
}
