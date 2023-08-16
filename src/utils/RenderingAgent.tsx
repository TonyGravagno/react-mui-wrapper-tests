import { AppConfig } from '@utils/config'

type CommonComponent<T> = (props: T) => JSX.Element

export type LocalRenderers<T> = {
  html: CommonComponent<T>
  mui: CommonComponent<T>
}
export function RenderingAgent<T>(components: LocalRenderers<T>) {
  const HtmlComponent = components.html
  const MuiComponent = components.mui

  return function (props: T) {
    const config = AppConfig()

    switch (config.ui.toolkit) {
      case 'html':
        return HtmlComponent(props)
      case 'mui':
        return MuiComponent(props)
      default:
        return null
    }
  }
}
