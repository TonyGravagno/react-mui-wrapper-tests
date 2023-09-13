import { useForm, FormProvider } from 'react-hook-form'
//import { z, ZodSchema } from 'zod'
import { SchemaProvider } from '@components/SchemaContext'
import { FieldText } from '@components/FieldText'

// import * as FormTypes from '../../types/FormTypes'
import * as Schema from './PersonSchema'
import { FieldTextArea } from '../../components/FieldTextArea'
import { FieldLabel } from '../../components/FieldLabel'
import { Grid, Paper } from '@mui/material'
import { SubmitButton } from '../../components/SubmitButton'
import { FieldCheckbox } from '../../components/FieldCheckbox'
// import * as Text from './Person/PersonText'
// import { CommonText } from '../../language/CommonText'
// import { InputTypes } from '../../elements/Input'

const schemaObject = Schema.schemaObject

const defaultData: Schema.Schema = {
  id: 1,
  first_name: 'me',
  birth_date: new Date(),
}
export const entityMaintForm = () => {
  const methods = useForm<Schema.Schema>({
    defaultValues: defaultData,
    mode: 'onChange', // 'onBlur', //
    resolver: async data => {
      const result = schemaObject.safeParse(data)
      if (result.success) {
        return { values: result.data, errors: {} }
      } else {
        const fieldErrors: Record<string, any> = {}
        for (const [field, issue] of Object.entries(result.error.formErrors.fieldErrors)) {
          if (issue.length > 0) {
            fieldErrors[field] = { message: issue[0] }
          }
        }
        return { values: {}, errors: fieldErrors }
      }
    },
  })

  const blurred_first_name = async (eventObj: any) => {
    // Manually trigger validation for the "first_name" field
    const isValid = await methods.trigger('first_name')
    console.dir(eventObj)
    // Do something based on the validation result
    if (isValid) {
      // The field is valid
    } else {
      // The field is not valid
    }
  }

  //methods.trigger('fieldname')
  return (
    <SchemaProvider<Schema.EntityZodType> schema={schemaObject}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                  <FieldLabel>Test Label</FieldLabel>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Paper>
                  <FieldText name="id" />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper>
                  <FieldTextArea name="first_name" onBlur={blurred_first_name} />
                  <FieldText name="birth_date" />
                  <FieldCheckbox name="active" />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                  <SubmitButton>Submit</SubmitButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </SchemaProvider>
  )
}

const onSubmit = (data: Schema.Schema) => {
  console.log(data)
}
