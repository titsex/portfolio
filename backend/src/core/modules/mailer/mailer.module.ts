import { createMailerCredentialsProvider, createMailerTransportProvider } from '@mailer/provider'
import { DynamicModule, Global, Module } from '@nestjs/common'
import { MailerService } from '@mailer/service'
import { MailerOptions } from '@mailer/types'

@Global()
@Module({})
export class MailerModule {
	public static forRoot(options: MailerOptions): DynamicModule {
		const mailerCredentialsProvider = createMailerCredentialsProvider(options)
		const mailerTransportProvider = createMailerTransportProvider()

		return {
			module: MailerModule,
			providers: [MailerService, mailerCredentialsProvider, mailerTransportProvider],
			exports: [MailerService, mailerCredentialsProvider, mailerTransportProvider],
		}
	}
}
