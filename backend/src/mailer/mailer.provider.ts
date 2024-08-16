import { MAILER_OPTIONS_PROVIDER, MAILER_PROVIDER } from './mailer.constants'
import { MailerOptions, NodeMailerOptions } from './mailer.types'
import { createTransport } from 'nodemailer'
import { Provider } from '@nestjs/common'

export function createMailerOptionsProvider(options: MailerOptions): Provider {
	return {
		provide: MAILER_OPTIONS_PROVIDER,
		inject: options.inject,
		useFactory: options.useFactory,
	}
}

export function createMailerProvider(): Provider {
	return {
		provide: MAILER_PROVIDER,
		inject: [MAILER_OPTIONS_PROVIDER],
		useFactory: (options: NodeMailerOptions) => createTransport(options),
	}
}
