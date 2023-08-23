import { TextFieldProps, ButtonProps } from '@mui/material'
import CSS from 'csstype'
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
    submit_text: string
    id_name: string
  }
  styles: {
    react: {
      labelledControl: CSS.Properties
      submitButton: CSS.Properties
      formContainer: CSS.Properties
      formFieldRow: CSS.Properties
      formFieldLabel: CSS.Properties
      formFieldInput: CSS.Properties
    }
    mui: {}
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
    submit_text: 'Subbit!',
  },
  styles: {
    react: {
      labelledControl: {
        display: 'flex',
        alignItems: 'flex-start',
      },
      submitButton: {
        margin: '5px',
      },
      formContainer: {
        borderWidth: '2px',
        borderStyle: 'inset',
        margin: '5px',
        padding: '5px',
      },
      formFieldRow: {
        display: 'flex',
        alignItems: 'flex-start',
      },
      formFieldLabel: {
        marginRight: '5px',
        verticalAlign: 'text-bottom',
        textAlign: 'left',
        color: 'green',
        width: '40%',
      },
      formFieldInput: {
        textAlign: 'left',
        width: '60%',
      },
    },
    mui: {},
  },
  status: 'Testing',
}

// marginRight: '342px',
// verticalAlign: 'text-top',
// textAlign: 'start',
