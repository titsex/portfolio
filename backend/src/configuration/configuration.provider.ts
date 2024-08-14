import { CONFIGURATION_PROVIDER } from './configuration.constants'
import { configurationSchema } from './configuration.schema'
import { Value } from '@sinclair/typebox/value'
import { Provider } from '@nestjs/common'

export function createConfigurationProvider(): Provider {
	return {
		provide: CONFIGURATION_PROVIDER,
		useFactory: () => Value.Parse(configurationSchema, process.env),
	}
}
