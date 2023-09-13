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
  active,
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
export type SchemaMetaType = {
  [key in keyof typeof FieldNameKeys]: any
}

export const schemaMeta: SchemaMetaType = {
  id: JSON.stringify({
    label: PersonText.Labels.id,
    multiline: false,
  }),
  first_name: JSON.stringify({
    label: PersonText.Labels.first_name,
    multiline: true,
  }),
  birth_date: JSON.stringify({
    label: PersonText.Labels.birth_date,
  }),
  active: JSON.stringify({
    label: PersonText.Labels.active,
  }),
}

// const schema = CommonSchema<keyof typeof FieldNameKeys>(PersonText)
export const schemaShape: SchemaShapeType = {
  id: z.number().describe(schemaMeta.id),
  first_name: z.string().nullable().describe(schemaMeta.first_name),
  birth_date: z.date().nullable().describe(schemaMeta.birth_date),
  active: z.boolean().nullable().describe(schemaMeta.active),
}
//if (schemaShape as SchemaShapeType) null // canary

export const schemaObject = getSchema(schemaShape)
export type EntityZodType = typeof schemaObject
export type EntityType = z.infer<EntityZodType>
export type Schema = EntityDataType & EntityType
