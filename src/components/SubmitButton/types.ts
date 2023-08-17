// Required by dependencies for @components/Name
export type * from '../../types/commonTypes'
import { Base } from '.' // weird reflection required to import from export
import { ButtonProps as MuiButtonProps } from '@mui/material'

export type BasePropsType = Base['button'] & MuiButtonProps

export type LocalSubmitButtonProps = {}

export type SubmitButtonProps = BasePropsType & LocalSubmitButtonProps
