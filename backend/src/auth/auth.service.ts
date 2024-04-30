import { MailerService } from '@mailer/service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
	constructor(private readonly mailerService: MailerService) {}

	public async test() {
		await this.mailerService.send({
			from: process.env.MAILER_AUTH_USER,
			to: process.env.DEVELOPER_EMAIL,
			subject: 'test',
			text: 'test',
		})
	}
}
