
// generated : 2023-08-07T23:33:00.930Z v3.8.701

  import * as Schema from './PersonSchema'
  import { defaultInstance } from "../../utils/zodutils";

export const db = () => {
  const getDefault = (): Schema.EntityType => {
    let _default = defaultInstance<typeof Schema.schemaObject>(Schema.schemaObject, { defaultDateNull: true })
    return _default
  }
  return {
    getDefault,
    createRec: (rec: Schema.EntityType) => {
      console.dir({ creating: rec })
    },
    readRec: (): Schema.EntityType => {
      const rec = getDefault() // temporary
      console.dir({ returning: rec })
      return rec
    },
    updateRec: (rec: Schema.EntityType) => {
      console.dir({ updating: rec })
    },
    deleteRec: (rec: Schema.EntityType) => {
      console.dir({ deleting: rec })
    }
  }
}      
  