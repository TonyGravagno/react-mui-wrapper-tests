import z from 'zod'
import { Translatable } from './Translatable'

export const commonRegex = {
  entityNameRegex: /^[a-zA-Z\s,\.\-]+$/
}
export const commonSchema = <T extends string>(EntityText: Translatable<T>) => {
  return {
    entityName: () =>
      z
        .string()
        .max(60, { message: EntityText.Messages['EntityNameMax'] })
        .min(2, { message: EntityText.Messages['EntityNameMin'] })
        .regex(RegExp(commonRegex.entityNameRegex), {
          message: EntityText.Messages['NameRegex']
        })
        .default(''),
    firstName: () =>
      z
        .string()
        .max(60, { message: EntityText.Messages['LongName'] })
        .regex(RegExp(commonRegex.entityNameRegex), {
          message: EntityText.Messages['NameRegex']
        })
        .default(''),
    lastName: () =>
      z
        .string()
        .max(60, { message: EntityText.Messages['LongName'] })
        .min(2, { message: EntityText.Messages['LastNameMin'] })
        .regex(RegExp(commonRegex.entityNameRegex), {
          message: EntityText.Messages['NameRegex']
        })
        .default(''),
    date: (min: Date = new Date(), max: Date = new Date(), defaultValue: Date | null = null) =>
      z.coerce
        .date()
        .min(min, {
          message: EntityText.Messages['TooOld']
        })
        .max(max, {
          // cannot be born 'today' or after
          message: EntityText.Messages['TooYoung']
        })
        .nullish()
        .default(defaultValue)
  }
}
