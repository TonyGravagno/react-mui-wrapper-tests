import { createContext, useContext, ReactNode } from 'react'
import { AnyZodObject } from 'zod'

interface SchemaProviderProps<T extends AnyZodObject> {
  schema: T
  children: ReactNode
}

interface SchemaContextType<T extends AnyZodObject> {
  schema: T
}

const SchemaContext = createContext<SchemaContextType<any> | null>(null)

export function useSchema<T extends AnyZodObject>(): T {
  const context = useContext(SchemaContext)
  if (!context) {
    throw new Error('useSchema must be used within a SchemaProvider')
  }
  return context.schema as T
}

export function SchemaProvider<T extends AnyZodObject>({
  children,
  schema,
}: SchemaProviderProps<T>) {
  return <SchemaContext.Provider value={{ schema }}>{children}</SchemaContext.Provider>
}
