import { SentMessageInfo } from 'nodemailer/lib/smtp-transport'
import { SendMailOptions, Transporter } from 'nodemailer'
import { MAILER_PROVIDER } from '@mailer/constants'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class MailerService {
	constructor(@Inject(MAILER_PROVIDER) private readonly mailerTransport: Transporter<SentMessageInfo>) {}

	public async send(options: SendMailOptions) {
		await this.mailerTransport.sendMail(options)
	}
}
