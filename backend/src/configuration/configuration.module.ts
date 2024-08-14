import { createConfigurationProvider } from './configuration.provider'
import { DynamicModule, Global, Module } from '@nestjs/common'
import { ConfigurationService } from './configuration.service'

@Global()
@Module({})
export class ConfigurationModule {
	public static forRoot(): DynamicModule {
		const configurationProvider = createConfigurationProvider()

		return {
			module: ConfigurationModule,
			providers: [ConfigurationService, configurationProvider],
			exports: [ConfigurationService, configurationProvider],
		}
	}
}
