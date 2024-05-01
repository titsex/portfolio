import { DynamicModule, Global, Module } from '@nestjs/common'
import { createMailerProvider } from '@mailer/provider'
import { MailerService } from '@mailer/service'
import { MailerOptions } from '@mailer/types'

@Global()
@Module({})
export class MailerModule {
	public static forRoot(options: MailerOptions): DynamicModule {
		const mailerProvider = createMailerProvider(options)

		return {
			module: MailerModule,
			providers: [MailerService, mailerProvider],
			exports: [MailerService, mailerProvider],
		}
	}
}
