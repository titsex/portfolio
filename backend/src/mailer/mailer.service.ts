import type { NodeMailerSendOptions, NodeMailerTransport } from './mailer.types'
import { ConfigurationService } from '../configuration/configuration.service'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { MAILER_PROVIDER } from './mailer.constants'

@Injectable()
export class MailerService {
	constructor(
		@Inject(MAILER_PROVIDER) private readonly mailer: NodeMailerTransport,
		private readonly configurationService: ConfigurationService,
	) {}

	public async send(options: NodeMailerSendOptions) {
		try {
			return await this.mailer.sendMail({
				from: this.configurationService.get('MAILER_AUTH_USER'),
				...options,
			})
		} catch (error) {
			Logger.error('The email could not be sent', MailerService.name)
		}
	}
}
