import vine from '@vinejs/vine'

import { CONFIGURATION_PROVIDER } from './configuration.constants'
import { configurationSchema } from './configuration.schema'
import { Provider } from '@nestjs/common'

export function createConfigurationProvider(): Provider {
	return {
		provide: CONFIGURATION_PROVIDER,
		useFactory: async () => {
			const { validate } = vine.compile(configurationSchema)

			return await validate(process.env)
		},
	}
}
