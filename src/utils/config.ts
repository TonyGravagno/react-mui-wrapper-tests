import config from '@root/app.config.json'
import { TextFieldProps } from '@mui/material'
type ReactProps = React.JSX.IntrinsicElements

export interface AppConfigJson {
  ui: {
    toolkit: 'mui' | 'html'
    text_variant: TextFieldProps['variant']
    text_size: TextFieldProps['size']
    textarea_maxRows: TextFieldProps['maxRows']
    input_minLength: ReactProps['input']['minLength']
    input_maxLength: ReactProps['input']['maxLength']
    textarea_minLength: ReactProps['textarea']['minLength']
    textarea_maxLength: ReactProps['textarea']['maxLength']
    textarea_rows: ReactProps['textarea']['rows']
  }
  status: string
}

function isAppConfigJson(object: any): object is AppConfigJson {
  return (
    object &&
    typeof object.status === 'string' &&
    object.ui &&
    (object.ui.toolkit === 'mui' || object.ui.toolkit === 'html')
  )
}

export const AppConfig = (): AppConfigJson => {
  if (isAppConfigJson(config)) {
    return config
  } else {
    throw new Error('Invalid app.config.json')
  }
}
