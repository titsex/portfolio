import { configurationSchema } from './configuration.schema'
import { Static } from '@sinclair/typebox'

export type Configuration = Static<typeof configurationSchema>
