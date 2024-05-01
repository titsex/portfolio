import { CONFIG_PROVIDER } from '@config/constants'
import { ConfigSchema } from '@config/schema'
import { Provider } from '@nestjs/common'

export function createConfigProvider(): Provider {
	return {
		provide: CONFIG_PROVIDER,
		useFactory: () => ConfigSchema.parse(process.env),
	}
}
