import { ConfigurationModule } from './configuration/configuration.module'
import { Module } from '@nestjs/common'

@Module({
	imports: [ConfigurationModule.forRoot()],
	controllers: [],
	providers: [],
})
export class ApplicationModule {}
