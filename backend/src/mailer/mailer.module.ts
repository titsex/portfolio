import { createMailerOptionsProvider, createMailerProvider } from './mailer.provider'
import { DynamicModule, Global, Module } from '@nestjs/common'
import { MailerService } from './mailer.service'
import { MailerOptions } from './mailer.types'

@Global()
@Module({})
export class MailerModule {
	public static forRoot(options: MailerOptions): DynamicModule {
		const mailerOptionsProvider = createMailerOptionsProvider(options)
		const mailerProvider = createMailerProvider()

		return {
			module: MailerModule,
			providers: [mailerOptionsProvider, mailerProvider, MailerService],
			exports: [mailerOptionsProvider, mailerProvider, MailerService],
		}
	}
}
