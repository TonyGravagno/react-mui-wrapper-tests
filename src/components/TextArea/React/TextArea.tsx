import { TextFieldProps as MuiProps } from '@mui/material'
type ReactProps = React.JSX.IntrinsicElements['textarea']
type TextAreaProps = ReactProps & MuiProps

export const TextArea = (props: TextAreaProps) => {
  const reactProps = props as ReactProps
  const muiProps = props as MuiProps
  const labelComponent = muiProps.label ? <label>{muiProps.label}</label> : null
  return (
    <div>
      {labelComponent ?? null}
      <textarea
        rows={2}
        minLength={1}
        maxLength={2000}
        id="unknown"
        name="unknown"
        {...reactProps}
      />
    </div>
  )
}
