import { ConfigSchema } from '@config/schema'
import { z } from 'zod'

export type ConfigType = z.infer<typeof ConfigSchema>
