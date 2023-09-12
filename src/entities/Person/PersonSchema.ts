// generated : 2023-08-07T23:33:00.805Z v3.8.701

import z from 'zod'
import { getSchema } from '../../utils/CommonUtils'
import { EntityDataType } from '../../types/FormTypes'
import { PersonText } from './PersonText'
// import { commonSchema as CommonSchema } from '../../types/CommonSchema'
import { EnumUtils } from '../../utils/enum'

enum FieldNameEnum {
  id,
  first_name,
  birth_date,
}

enum MessageKeysEnum {
  AppName,
  NameRegex,
}

enum ValidationKeysEnum {
  NameRegex,
}

export type FieldNameType = typeof FieldNameEnum

export const FieldNameKeys = EnumUtils.toObject(FieldNameEnum)
export const MessageKeys = EnumUtils.toObject(MessageKeysEnum)
export const ValidationKeys = EnumUtils.toObject(ValidationKeysEnum)

export type SchemaShapeType = {
  [key in keyof typeof FieldNameKeys]: z.ZodTypeAny
}

// const schema = CommonSchema<keyof typeof FieldNameKeys>(PersonText)
export const schemaShape = {
  id: z.number().describe(PersonText.Labels.id),
  first_name: z.string().nullable().describe(PersonText.Labels.first_name),
  birth_date: z.date().nullable().describe(PersonText.Labels.birth_date),
}
if (schemaShape as SchemaShapeType) null // canary

export const schemaObject = getSchema(schemaShape)
export type EntityZodType = typeof schemaObject
export type EntityType = z.infer<EntityZodType>
export type Schema = EntityDataType & EntityType
