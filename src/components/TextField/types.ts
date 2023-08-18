// Required by dependencies for @components/Name
export type * from '../../types/commonTypes'
import { Base } from '.' // weird reflection required to import from export
import { TextFieldProps as MuiTextFieldProps } from '@mui/material'

export type BasePropsType = Base['input'] & MuiTextFieldProps

export type LocalTextFieldProps = {
  // canResize?: boolean
}

export type TextFieldProps = BasePropsType & LocalTextFieldProps

type test1 = MuiTextFieldProps['size']
type test2 = Base['input']['size']
type test3 = BasePropsType['size']
type test4 = TextFieldProps['size']
