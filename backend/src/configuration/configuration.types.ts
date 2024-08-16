import { configurationSchema } from './configuration.schema'
import { Infer } from '@vinejs/vine/build/src/types'

export type Configuration = Infer<typeof configurationSchema>
