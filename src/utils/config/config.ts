import config from '@root/app.config.json'
import * as D from './dependencies'

export type TextFieldVariants = 'outlined' | 'standard' | 'filled'

type commonTypes = {
  button_variant: 'outlined' | 'text' | 'contained'
  text_variant: TextFieldVariants
  button_size?: 'medium' | 'small' | 'large'
  text_size: D.BaseTextFieldProps['size']
}
export interface AppConfigJson {
  ui: {
    toolkit: 'mui' | 'html'
  }
  status: 'testing' | 'production'
  defaults: {
    button_variant: string
    text_variant: string
    button_size: string
    text_size: string
    SubmitButton_children: string
    TextArea_rows: number
    TextArea_maxRows: number
  }
}
export type AppConfigType = {
  ui: {
    toolkit: 'mui' | 'html'
  }
  status: 'testing' | 'production'
  defaults: {
    button_variant: commonTypes['button_variant']
    text_variant: commonTypes['text_variant']
    button_size: commonTypes['button_size']
    text_size: commonTypes['text_size']
    SubmitButton_children: string
    TextArea_rows?: number
    TextArea_maxRows?: number
  }
}

function isAppConfigJsonOK(object: AppConfigJson): object is AppConfigJson {
  // Would be a lot better to Zod this
  const uiIsOK =
    object && object.ui && (object.ui.toolkit === 'mui' || object.ui.toolkit === 'html')
  const statusIsOK =
    object && object.status && (object.status === 'testing' || object.status === 'production')
  const defaultsAreOK =
    object &&
    (!object.defaults.button_variant || typeof object.defaults.button_variant === 'string') &&
    typeof object.defaults.button_variant === 'string' &&
    (!object.defaults.text_variant || typeof object.defaults.text_variant === 'string') &&
    (!object.defaults.button_size || typeof object.defaults.button_size === 'string') &&
    typeof object.defaults.text_size === 'string' &&
    typeof object.defaults.button_size === 'string' &&
    typeof object.defaults.SubmitButton_children === 'string' &&
    (!object.defaults.TextArea_rows || typeof object.defaults.TextArea_rows === 'number') &&
    (!object.defaults.TextArea_maxRows || typeof object.defaults.TextArea_maxRows === 'number')
  return uiIsOK && statusIsOK && defaultsAreOK
}

export const AppConfig = (): AppConfigType => {
  if (isAppConfigJsonOK(config as AppConfigJson)) {
    return config as AppConfigType
  } else {
    throw new Error('Invalid app.config.json')
  }
}
