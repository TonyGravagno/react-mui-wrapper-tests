import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ZodSchema, z } from 'zod'
import { HugSubmitButton as SubmitButton } from '../components/HugSubmitButton'
import { HugTextField as TextField } from '../components/HugTextField'
import { HugSubmitButtonProps as SubmitButtonProps, HugTextFieldProps as TextFieldProps } from '../types/HugFieldOptions'

// Define a Zod validation schema
const schema: ZodSchema = z.object({
  name: z.string().min(1),
  agree: z.boolean(),
  date: z.string().min(1),
})

function textFieldContext(name: string): TextFieldProps {
  // temporary
  return {
    name: name,
    textOptions: null,
    fieldOptions: null,
    allOptions: null,
    validationSchema: schema,
  }
}

function submitButtonContext(): SubmitButtonProps {
  // temporary
  return {
    buttonOptions: null,
    label: 'Click Me',
    allOptions: null,
    // control: null,
    // defaultComponent: null,
  }
}
const FormTextOnly = () => {

  // React Hook Form setup
  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(schema),
  })

  // Form submission handler
  const onSubmit = (data: any) => {
    console.dir({ submitted: data })
  }
  const localContext: TextFieldProps = {...textFieldContext('name'), control}
  const submitContext: SubmitButtonProps = {...submitButtonContext(), control}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...localContext} name='name' />
      <SubmitButton {...submitContext} />
    </form>
  )
}
export default FormTextOnly

/* 
       <Controller
        name="agree"
        control={control}
        render={({ field }) => <HugCheckBox options={localContext} {...field} />}
      />
      <Controller
        name="date"
        control={control}
        render={({ field }) => <HugDate options={localContext} {...field} />}
      />
      <HugSubmitButton disabled={localContext.isSubmitting} options={localContext} />

       */
