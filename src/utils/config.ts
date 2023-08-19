import config from '@root/app.config.json'
import { TextFieldProps } from '@mui/material'

export interface AppConfigJson {
  ui: {
    toolkit: 'mui' | 'html'
    text_variant: TextFieldProps['variant']
    text_size: TextFieldProps['size']
    textarea_maxRows: TextFieldProps['maxRows']
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
