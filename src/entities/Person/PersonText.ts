
// generated : 2023-08-07T23:33:01.192Z v3.8.701

  import { MessageKeys, ValidationKeys } from './PersonSchema'
  import { FieldNameKeys } from './PersonSchema'
  import { Translatable } from '../../language/Language'
  import { CommonText } from '../../language/CommonText'

  export const Names = {
    entityName: 'Person',
    displayName: 'Person',
    tableName: 'Person'
  }
  
  export const PersonText: Translatable<
    keyof typeof FieldNameKeys,
    keyof typeof MessageKeys,
    keyof typeof ValidationKeys
  > = {
    Type: Names.entityName,
    Messages: {
      AppName: `${Names.displayName} ${CommonText.maintenance}`,
      NameRegex: 'Names can only include letters, commas, space, hyphen, apostrophe, and period',
    },
    Labels: {
      id: 'ID',
      first_name: 'First Name',
      birth_date: 'Birth Date',
      active: 'Active',
    },
    Validation: {
      NameRegex: /^[a-zA-Z\s,.\-']+$/
    }
  }
  
  