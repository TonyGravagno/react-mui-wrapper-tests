import React, { createContext, useContext, ReactNode } from 'react';
import { ZodSchema } from 'zod';

interface SchemaProviderProps {
  schema: ZodSchema<any>;
  children: ReactNode;  // Fix for TypeScript error
}

const SchemaContext = createContext<ZodSchema<any> | null>(null);

export const useSchema = () => {
  const context = useContext(SchemaContext);
  if (!context) {
    throw new Error('useSchema must be used within a SchemaProvider');
  }
  return context;
};

export const SchemaProvider: React.FC<SchemaProviderProps> = ({ children, schema }) => {
  return <SchemaContext.Provider value={schema}>{children}</SchemaContext.Provider>;
};