import { TextFieldProps, ButtonProps, CheckboxProps, FormControlLabelProps } from '@mui/material'
import CSS from 'csstype'
type ReactProps = React.JSX.IntrinsicElements

// Define a union of string literals for the keys
type StyleKeys =
  | 'labelledControl'
  | 'submitButton'
  | 'formContainer'
  | 'formFieldRow'
  | 'formFieldLabel'
  | 'formFieldInput'
  | 'toggleFieldLabelStart'
  | 'toggleFieldLabelEnd'
  | 'toggleFieldLabelTop'
  | 'toggleFieldLabelBottom'
  | 'toggleFieldInputStart'
  | 'toggleFieldInputEnd'
  | 'toggleFieldInputTop'
  | 'toggleFieldInputBottom'
  | 'toggleFieldControl'

// Use the Record utility type to create a type with those keys, all having the same value type
type MuiStyles = Record<StyleKeys, CSS.Properties>

export type AppConfigJson = {
  utils: (options: any) => any
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
    checkboxColor: CheckboxProps['color']
    checkboxDisableRipple: boolean
    checkboxLabelPlacement: FormControlLabelProps['labelPlacement']
    commonBackgroundColor: MuiStyles['formContainer']['backgroundColor']
  }
  styles: {
    mui: MuiStyles
  }
  status: string
}

export const config: AppConfigJson = {
  utils: options => {
    return options // FIX
    // not implemented
    // if (options['init']) {
    //   config.styles.mui.toggleFieldControl.backgroundColor = config.ui.commonBackgroundColor
    // }
  },
  ui: {
    toolkit: 'mui',
    id_name: 'dunno',
    button_variant: 'outlined',
    text_variant: 'outlined',
    button_size: 'small',
    text_size: 'medium',
    textarea_maxRows: 5,
    textarea_rows: 5,
    textarea_minLength: 1,
    textarea_maxLength: 20,
    input_minLength: 0,
    input_maxLength: 80,
    submit_text: 'Subbit!',
    checkboxColor: 'default',
    checkboxDisableRipple: false,
    checkboxLabelPlacement: 'end',
    commonBackgroundColor: 'aliceblue',
  },
  styles: {
    mui: {
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
        padding: '20px',
      },
      formFieldRow: {
        display: 'flex',
        alignItems: 'flex-start',
      },
      formFieldLabel: {
        marginRight: '5px',
        verticalAlign: 'text-bottom',
        textAlign: 'left',
        //      color: 'green',
        width: '100%',
      },
      formFieldInput: {
        textAlign: 'left',
        width: '95%',
        marginBottom: '20px',
      },
      toggleFieldLabelStart: {
        verticalAlign: 'text-top',
        textAlign: 'right',
        //     color: 'blue',
        //     backgroundColor: 'yellow',
        marginRight: '40px',
        marginLeft: '-4px',
        borderStyle: 'dotted',
        width: '100%',
      },
      toggleFieldLabelEnd: {
        verticalAlign: 'text-top',
        textAlign: 'left',
        //      color: 'blue',
        //      backgroundColor: 'yellow',
        marginRight: '40px',
        marginLeft: '-4px',
        borderStyle: 'dotted',
        width: '100%',
      },
      toggleFieldLabelTop: {
        verticalAlign: 'baseline',
        textAlign: 'center',
        //      color: 'green',
        marginBottom: '-8px',
      },
      toggleFieldLabelBottom: {
        verticalAlign: 'baseline',
        textAlign: 'center',
        //     color: 'blue',
        marginTop: '-8px',
      },
      toggleFieldInputStart: {
        marginLeft: '-5px',
        marginRight: '2px',
        textAlign: 'left',
        width: '60%',
        //      backgroundColor: 'red',
      },
      toggleFieldInputEnd: {
        marginLeft: '0px',
        marginRight: '5px',
        textAlign: 'left',
        width: '60%',
        //        backgroundColor: 'orange',
      },
      toggleFieldInputTop: {
        // marginLeft: '3px',
        // marginRight: '2px',
        textAlign: 'center',
        // width: '60%',
        //       color: '#ffaa33',
      },
      toggleFieldInputBottom: {
        // marginLeft: '-7px',
        // marginRight: '2px',
        textAlign: 'center',
        // width: '60%',
        //     color: '#ffaa33',
      },
      toggleFieldControl: {
        marginLeft: '2px',
        textAlign: 'left',
        //    backgroundColor: '#00ffaa',
      },
    },
  },
  status: 'Testing',
}
config.utils('init')

// marginRight: '342px',
// verticalAlign: 'text-top',
// textAlign: 'start',
