import { FieldText } from './FieldText'
import { TextFieldProps as FieldTextProps } from '@apptypes/input'

export const FieldTextArea: React.FC<FieldTextProps> = ({
  name,
  variant = 'outlined',
  ...fieldProps
}) => <FieldText name={name} variant={variant} multiline={true} {...fieldProps} />
