import { SentMessageInfo } from 'nodemailer/lib/smtp-transport'
import { MAILER_TRANSPORT_PROVIDER } from '@mailer/constants'
import { SendMailOptions, Transporter } from 'nodemailer'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class MailerService {
	constructor(@Inject(MAILER_TRANSPORT_PROVIDER) private readonly mailerTransport: Transporter<SentMessageInfo>) {}

	public async send(options: SendMailOptions) {
		await this.mailerTransport.sendMail(options)
	}
}
