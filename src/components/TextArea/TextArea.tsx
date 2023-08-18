import * as D from './dependencies'

/**
 * https://mui.com/material-ui/react-text-field/
 */
const config = D.AppConfig()

const defaults  : D.TextFieldProps = {
  size: config.defaults.size,
  variant: config.defaults.variant,
  type: 'text',
  multiline: true,
  rows: config.defaults.TextArea_rows,
  maxRows: config.defaults.TextArea_maxRows
}

const MuiField = (props: D.TextFieldProps) => {
  return <D.MuiTextField {...defaults} {...props} />
}

const HtmlField = (props: D.TextFieldProps) => {
  const newProps = D.getRequiredProps<D.TextFieldProps, D.Base['textarea']>(
    { ...defaults, ...props },
    <textarea />
  )
  return (
    <div>
      <D.Label label={props.label} />
      <textarea {...newProps} />
    </div>
  )
}

/**
 * Wrapper for TextArea, TextField, and related controls internally invokes MuiTextField or React.input
 * @param props
 * @returns 
 */
export const TextArea = (props: D.TextFieldProps) => {
  return D.RenderingAgent({ html: HtmlField, mui: MuiField })(props)
}



















// import * as D from './dependencies'

// /**
//  * https://mui.com/material-ui/react-text-field/
//  */

// const defaults : D.TextFieldProps = {
//   // label: 'Field?',
//   // type: 'text',
//   // disabled: false,
//   multiline: true,
// }

// const MuiField = (props: D.TextFieldProps) => {
//   return <D.MuiTextField {...defaults} {...props} />
// }

// const HtmlField = (props: D.TextFieldProps) => {
//   const newProps = D.getRequiredProps<D.TextFieldProps, D.Base['input']>(
//     { ...defaults, ...props },
//     <input />
//   )
//   return (
//     <div>
//       <D.Label label={props.label} />
//       <input {...newProps} />
//     </div>
//   )
// }

// /**
//  * Wrapper for TextArea internally invokes MuiTextField or React.textarea
//  * @param props 
//  * @returns 
//  */
// export const TextArea = (props: D.TextFieldProps) => {
//   return D.RenderingAgent({ html: HtmlField, mui: MuiField })(props)
// }
