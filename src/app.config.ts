import { TextFieldProps, ButtonProps } from '@mui/material'
type ReactProps = React.JSX.IntrinsicElements

export type AppConfigJson = {
  ui: {
    toolkit: 'mui' | 'react'
    button_size: ButtonProps['size']
    button_variant: ButtonProps['variant']
    text_variant: TextFieldProps['variant']
    text_size: TextFieldProps['size']
    textarea_maxRows: TextFieldProps['maxRows']
    input_minLength: ReactProps['input']['minLength']
    input_maxLength: ReactProps['input']['maxLength']
    textarea_minLength: ReactProps['textarea']['minLength']
    textarea_maxLength: ReactProps['textarea']['maxLength']
    textarea_rows: ReactProps['textarea']['rows']
    submit_text : string
    id_name : string
  }
  status: string
}


export const config: AppConfigJson = {
  ui: {
    toolkit: 'react',
    id_name: 'dunno',
    button_variant: 'outlined',
    text_variant: 'outlined',
    button_size: 'small',
    text_size: 'small',
    textarea_maxRows: 5,
    textarea_rows: 3,
    textarea_minLength: 1,
    textarea_maxLength: 20,
    input_minLength: 0,
    input_maxLength: 80,
    submit_text: 'Subbit!'
  },
  status: 'Testing',
}
