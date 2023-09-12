import { FieldText } from './FieldText'
import { TextFieldProps as FieldTextProps } from '@apptypes/input'

export const FieldTextArea: React.FC<FieldTextProps> = ({
  name,
  variant = 'outlined',
  ...otherProps
}) => <FieldText name={name} variant={variant} multiline={true} {...otherProps} />
