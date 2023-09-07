import { config } from '@root/app.config'
import { TextFieldProps } from '@apptypes/input'
import {
  FilledInput,
  FilledInputProps,
  Input,
  InputProps,
  OutlinedInput,
  OutlinedInputProps,
  FormControl,
  FormLabel,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
//import { Label } from '@components/Label'
import React from 'react'

const controlType = 'text'

export const TextField: React.FC<TextFieldProps> = ({
  label,
  variant = 'outlined',
  ...otherProps
}) => {

  const defaultProps = {
    type: controlType,
    id: config.ui.id_name,
    name: config.ui.id_name,
    size: config.ui.text_size,
    style: config.styles.current().formFieldInput,
  }
  const renderInput = () => {
    switch (variant) {
      case 'filled':
        return <FilledInput {...defaultProps} {...(otherProps as FilledInputProps)} />
      case 'outlined':
        return <OutlinedInput {...defaultProps} {...(otherProps as OutlinedInputProps)} />
      case 'standard':
      default:
        return <Input {...defaultProps} {...(otherProps as InputProps)} />
    }
  }

  if (typeof label === 'string') {
    return (
      <MuiTextField
        {...defaultProps}
        variant={variant}
        label={label}
        {...(otherProps as MuiTextFieldProps)}
      />
    )
  } else {
    return (
      <FormControl variant={variant}>
        <FormLabel>{label}</FormLabel>
        {renderInput()}
      </FormControl>
    )
  }
}

/*  return (
    <>
      <MuiTextField
        type={controlType}
        id={config.ui.id_name}
        name={config.ui.id_name}
        size={config.ui.text_size}
        style={config.styles.current().formFieldInput}
        value={config.ui.text_variant}
        label={textLabel}
        {...(props as MuiProps)}
      />
      <span>{inputLabel}</span>
    </>
  ) */

/**
 *   type MuiLabel = MuiProps['label']
  type ParameterLabel = typeof props.label
  const labelStyle = {
    color: 'blue',
  }
  const inputStyle = {
    width: '100px',
  }
  const savedLabel = <Label style={{ color: 'green' }}>Outlined</Label>
     <FormControl>
        <FormLabel>{<Label style={labelStyle}>Standard</Label>}</FormLabel>
        <Input style={inputStyle} />
      </FormControl>
      <FormControl>
        <FormLabel>{savedLabel}</FormLabel>
        <OutlinedInput style={inputStyle} />
      </FormControl>
      <FormControl>
        <FormLabel>
          <Label style={labelStyle}>Filled</Label>
        </FormLabel>
        <FilledInput style={inputStyle} />
      </FormControl>
      <MuiTextField style={inputStyle} label="TextField" />
 */

/**
      <FormControl>
        <Input
          type="text"
          id={config.ui.id_name}
          name={config.ui.id_name}
          size={config.ui.text_size}
          style={config.styles.current().formFieldInput}
          {...(props as MuiInputProps)}
        />
        <InputLabel htmlFor={props.id} {...(props as MuiLabelProps)}>
          ILabel
        </InputLabel>
      </FormControl>
 */

/* 
const processControl = (props: TextFieldProps): JSX.Element => {
  const variant = props.variant || config.ui.text_variant
  if (variant === 'standard') return standardControl(props)
  if (variant === 'filled') return filledControl(props)
  if (variant === 'outlined') return outlinedControl(props)
  return <></>
}

function standardControl(props: TextFieldProps): JSX.Element {
  
  const defaultProps: InputProps = {
    type: controlType,
    id: config.ui.id_name,
    name: config.ui.id_name,
    size: config.ui.text_size,
    style: config.styles.current().formFieldInput,
    ...props
  }
  return (
    <>
      <MuiTextField  {...props} />
    </>
  )
}

function filledControl(props: TextFieldProps): JSX.Element {
  const defaultProps: FilledInputProps = {
    type: controlType,
    id: config.ui.id_name,
    name: config.ui.id_name,
    size: config.ui.text_size,
    style: config.styles.current().formFieldInput
  }
  return (
    <>
      <MuiTextField {...props} />
    </>
  )}

function outlinedControl(props: TextFieldProps): JSX.Element {
  const defaultProps: OutlinedInputProps = {
    type: controlType,
    id: config.ui.id_name,
    name: config.ui.id_name,
    size: config.ui.text_size,
    style: config.styles.current().formFieldInput
  }
  return (
    <>
      <MuiTextField {...props} />
    </>
  )}
 */
