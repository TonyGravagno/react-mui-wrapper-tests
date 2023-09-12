export type EntityDataType = Record<string, any>

export type EntityMaintFormType = (props: EntityDataProps) => React.JSX.Element

export type EntityDataProps = {
  entityData: EntityDataType
}

export type EntityFormProps = EntityDataProps & {
  entityForm: EntityMaintFormType
}

export type Module = () => { [key: string]: Function }

export type CommonFormProps = {
  entityName: string
  pageHeader: string
  db: Module
  entityData: EntityDataType
  EntityMaintForm: EntityMaintFormType
}

export type CommonFormType = (props: CommonFormProps) => React.ReactNode
