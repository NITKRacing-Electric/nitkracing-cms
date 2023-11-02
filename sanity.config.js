import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'nitk racing',

  projectId: 'mmoq24tu',
  dataset: 'productions',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
