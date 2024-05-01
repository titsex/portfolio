import { DynamicModule, Global, Module } from '@nestjs/common'
import { createConfigProvider } from '@config/provider'
import { ConfigService } from '@config/service'

@Global()
@Module({})
export class ConfigModule {
	public static forRoot(): DynamicModule {
		const configProvider = createConfigProvider()

		return {
			module: ConfigModule,
			providers: [ConfigService, configProvider],
			exports: [ConfigService, configProvider],
		}
	}
}
