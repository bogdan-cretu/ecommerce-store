import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Store',

  projectId: '63xf4beu',
  dataset: 'store',
  apiVersion: "2024-01-19",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
