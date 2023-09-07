
// generated : 2023-08-07T23:33:01.319Z v3.8.701

  import { db as Db } from './PersonDb'
  import { entityMaintForm as EntityForm } from './_PersonMaintForm'
  import * as Schema from './PersonSchema'
  import * as Text from './PersonText'
  import { EntityMaintPage } from '../../components/EntityMaintPage'
  import { AppPage } from '../../types/CommonTypes'
  
  let entityData: Schema.EntityType = Db().readRec()
  
  export const MaintPage : AppPage = () : React.ReactNode => {
    console.log('executing PersonMaintPage')
    return EntityMaintPage({
      entityName: Text.Names.displayName,
      pageHeader: Text.PersonText.Messages.AppName,
      db: Db,
      entityData: entityData,
      EntityMaintForm: EntityForm
    })
  }
  
  
  