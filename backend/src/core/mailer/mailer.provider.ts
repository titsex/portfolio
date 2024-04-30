import { MAILER_PROVIDER } from '@mailer/constants'
import { MailerOptions } from '@mailer/types'
import { createTransport } from 'nodemailer'
import { Provider } from '@nestjs/common'

export function createMailerProvider(options: MailerOptions): Provider {
	return {
		provide: MAILER_PROVIDER,
		useFactory: () => createTransport(options),
	}
}
