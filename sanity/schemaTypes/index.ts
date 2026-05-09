import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product' // <-- Add this import

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product], // <-- Add 'product' to this array
}