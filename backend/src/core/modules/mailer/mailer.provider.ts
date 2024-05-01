import { MAILER_CREDENTIALS_PROVIDER, MAILER_TRANSPORT_PROVIDER } from '@mailer/constants'
import { MailerCredentials, MailerOptions } from '@mailer/types'
import { createTransport } from 'nodemailer'
import { Provider } from '@nestjs/common'

export function createMailerCredentialsProvider(options: MailerOptions): Provider {
	return {
		provide: MAILER_CREDENTIALS_PROVIDER,
		useFactory: options.useFactory,
		inject: options.inject,
	}
}

export function createMailerTransportProvider(): Provider {
	return {
		provide: MAILER_TRANSPORT_PROVIDER,
		useFactory: (credentials: MailerCredentials) => createTransport(credentials),
		inject: [MAILER_CREDENTIALS_PROVIDER],
	}
}
