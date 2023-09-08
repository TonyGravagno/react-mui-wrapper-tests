import { isString } from 'lodash'
import { ErrorText } from '../language/CommonText'

export type EnumType = Record<string, any>

/**
 *
 */
export class EnumUtils {
  /**
   * valueFromKey provides key='value' or default numeric 0,1,2 from string key
   * @param enumObject source enum
   * @param key 'first', 'second', etc
   * @returns
   */
  public static valueFromKey = <EntityEnum, K extends (string | number) & keyof EntityEnum>(
    enumObject: EntityEnum,
    key: K | number
  ): string | number | undefined => {
    let result: string | number | undefined = undefined
    if (EnumUtils.isKeyString(key)) result = <string | number>enumObject[key]
    if (EnumUtils.isKeyNumber(key)) {
      const newKey = <string>EnumUtils.keyFromIndex(enumObject, key as number)
      if (newKey) {
        const array = Object.keys(enumObject as string[]).filter(key => isNaN(Number(key)))
        if (array.includes(newKey)) {
          let newObj = <EnumType>enumObject
          result = newObj[newKey] // enum without literal values
          if (result === key) result = newKey // don't return numeric index, return the key we got from the index
        }
      }
    }
    return result
  }

  /**
   * Affirms that a key parameter is a string
   * Internal, may not be necessary.
   * @param key passed into another function
   * @returns true/false
   */
  private static isKeyString(key: string | number): key is string {
    return isString(key)
  }
  /**
   * Affirms that a key parameter is a number
   * Internal, may not be necessary.
   * @param key passed into another function
   * @returns true/false
   */
  private static isKeyNumber(key: string | number): key is number {
    return !isString(key)
  }

  /**
   * Return enum.key given the numeric index in the enum
   * @param enumObject source enum
   * @param index : enum.foo, enum.bar : 0=foo, 1=bar
   * @returns string foo | bar
   * @example
   *    const name: string = keyFromIndex<string, typeof TestEnum, typeof TestEnum>(TestEnum, 1)
   * @todo Test with and without generics
   */
  // @ts-ignore No need for warning about unused U
  public static keyFromIndex = <S, T, U extends T = T>(enumObject: T, index: number): S => {
    const array = Object.keys(enumObject as string[]).filter(key => isNaN(Number(key)))
    const text = array[index]
    return text as S
  }

  /**
   * Return Enum keys in a standard string array using reduce
   * @param enumObject Enum passed in as plain object
   * @returns array with all alpha key names, not the numeric indices
   */
  public static keysAsArray = (enumObject: EnumType) => {
    let keys: string[] = Object.keys(enumObject)
    if (keys.length === 1) {
      const key = <string>keys[0]
      keys = Object.keys(enumObject[key])
    } else {
      throw new Error(ErrorText['Must use {enum} format'])
    }
    const array: string[] = keys
      .filter(key => isNaN(Number(key)))
      .reduce((result, key) => {
        result.push(key)
        return result
      }, <string[]>[])
    return array
  }

  /**
   * Return Enum values in a standard string array using reduce
   * @param enumObject Enum passed in as plain object
   * @returns array with all alpha values as string, not the numeric indices.
   * When the enum has no literal values, the values equal the keys.
   * @example {'foo','bar'} = ['foo','bar']
   * @example {'foo': 'Yes', 'bar':'No'} = ['Yes','No']
   */
  public static valuesAsArray = (enumObject: EnumType) => {
    let keys: string[] = Object.keys(enumObject)
    let values: string[] = Object.values(enumObject)
    if (keys.length === 1) {
      const key = <string>keys[0]
      keys = Object.keys(enumObject[key])
      values = Object.values(enumObject[key])
    } else {
      throw new Error(ErrorText['Must use {enum} format'])
    }
    const array: string[] = keys
      .filter(key => isNaN(Number(key)))
      .reduce((result, key) => {
        result.push(key)
        return result
      }, <string[]>[])
    if (array.length < values.length) return array
    return values
  }

  /**
   * Return only keys back as object map that are valid for an enum
   * @param keys
   *  ('lastName', 'firstName')
   * @returns object
   *  {lastName: 'lastName', firstName: 'firstName'}
   * @todo Test
   */
  public static keysAsObject<T extends string[]>(...keys: T): { [K in T[number]]: K } {
    return keys.reduce((acc, key) => {
      // @ts-ignore
      acc[key] = key
      return acc
    }, {} as { [K in T[number]]: K })
  }

  /**
   * Convert enum to object with equal key=value pairs
   * @param enumObject enum without braces
   * @returns \{key1:'key1',key2:'key2'}
   */
  public static toObject = <T extends EnumType>(enumObject: T) => {
    let target = new Map()
    for (const name of Object.keys(enumObject as EnumType).filter(key => isNaN(Number(key)))) {
      target.set(name,name)
    }
    const obj = Object.fromEntries(target)
    return obj as Record<string & keyof T,string>
  }

  /**
   * Verify that an element name is valid for a provided Enum
   * @param key Enum element that should be present in Enum
   * @param enumObject Enum passed in as {enum}, with surrounding braces
   * @returns True/False : Is the key valid for this Enum
   */
  public static isValidKey = <K extends string, E extends EnumType>(
    key: K,
    enumObject: E
  ): boolean => {
    const workingEnum: EnumType = EnumUtils.peelBackLayers(enumObject)
    const enumName = EnumUtils.enumName(workingEnum)
    if (enumName === undefined) return false
    if (key in workingEnum[enumName!]) return true
    return false
  }

  /**
   * Return the name of an enum, given the enum object itself
   * @param enumObject The actual enum object
   * @returns String with the object name 'Foo' from the 'enum Foo { ... }' declaration
   */
  public static enumName(enumObject: EnumType): string | undefined {
    const workingEnum: EnumType = EnumUtils.peelBackLayers(enumObject)
    let test = Object.keys(workingEnum)
    if (test.length == 1) return test[0]

    const values = Object.values(workingEnum)
    if (Object.keys(workingEnum).length !== 1) {
      return undefined
    }
    const firstObject = values[0]
    if (!firstObject['0']) {
      return undefined
    }
    const firstEnum = firstObject['0'] // must be string, not numeric
    if (firstObject[firstEnum] !== 0 /** must be numeric, not string  */) {
      return undefined
    }
    return Object.keys(workingEnum)[0] ?? undefined
  }
  private static peelBackLayers(enumObject: EnumType): EnumType {
    if (enumObject['enumObject']) return EnumUtils.peelBackLayers(enumObject['enumObject'])
    if (enumObject['initData']) return EnumUtils.peelBackLayers(enumObject['initData'])
    if (enumObject['fieldEnum']) return EnumUtils.peelBackLayers(enumObject['fieldEnum'])
    if (enumObject['FieldEnum']) return EnumUtils.peelBackLayers(enumObject['FieldEnum'])
    return enumObject
  }

  public static Test() {
    enum FieldNameEnum {
      firstName,
      lastName,
      birthDate
    }

    // enum FieldNameEnum1 {
    //   firstName = 'fn',
    //   lastName = 'ln',
    //   birthDate = 'bd'
    // }

    // const names = FieldNameEnum
    // const name = FieldNameEnum.birthDate

    console.log(EnumUtils.keysAsArray({ FieldNameEnum }))
    console.log(EnumUtils.valuesAsArray({ FieldNameEnum }))
    console.log(`enumName is ${EnumUtils.enumName({ FieldNameEnum })}`)
    console.log(`valueFromKey 'birthdate' = ${EnumUtils.valueFromKey(FieldNameEnum, 'birthDate')}`)
    console.log(`valueFromKey 1 = ${EnumUtils.valueFromKey(FieldNameEnum, 1)}`)
    console.log(`Key from index '1' = ${EnumUtils.keyFromIndex(FieldNameEnum, 1)}`)
    console.log(`Is 'foo' a valid key? ${EnumUtils.isValidKey('foo', FieldNameEnum)}`)
    console.log(`Is 'lastName' a valid key? ${EnumUtils.isValidKey('lastName', { FieldNameEnum })}`)
    console.log(EnumUtils.toObject(FieldNameEnum))
    console.log(EnumUtils.keysAsObject('lastName', 'firstName', 'foo'))
  }
}

/**
   * Return Enum keys in a standard string array
   * @param enumObject Enum passed in as {enum}, with surrounding braces
   * @returns array with all alpha key names, not the numeric indices
  public static keysAsArray1 = (enumObject: EnumType) => {
    const workingEnum: EnumType = EnumUtils.peelBackLayers(enumObject)
    const enumName = EnumUtils.enumName(workingEnum) // verify that this is a good enum - it has a name
    if (enumName === undefined) {
      throw new Error('Must use valid {enum} with braces')
    }
    const array = Object.keys(workingEnum[enumName] as string[]).filter(key => isNaN(Number(key)))
    return array
  }
  



  try {
  console.log(EnumUtils.keysAsArray1(FieldNameEnum)) // doesn't work, must use {enum}
} catch (error) {
  console.log('Received expected error')
  console.log(error)
}
try {
  console.log(EnumUtils.keysAsArray2(FieldNameEnum)) // works but we need to standardize {enum}
} catch (error) {
  console.log('Received expected error')
  console.log(error)
}



    
   */
