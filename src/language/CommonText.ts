export const CommonText = {
  maintenance: 'Maintenance',
  tableHeader: 'Each field for an entity can be a separate component'
}
export const ErrorText : Record<string,string> = {
  'Must use {enum} format': 'Must use {enum} format'
}

export const getErrorText = (key: string) => {
  return ErrorText[key]
}
