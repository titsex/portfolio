import { Options, AuthenticationTypeCustom } from 'nodemailer/lib/smtp-transport'
import { InjectionToken } from '@nestjs/common'
import { ConfigService } from '@config/service'

export interface MailerOptions {
	useFactory: (configService: ConfigService) => MailerCredentials
	inject: InjectionToken[]
}

export type MailerCredentials = Pick<Options, 'host' | 'port' | 'secure'> & {
	auth: Pick<AuthenticationTypeCustom, 'user' | 'pass'>
}
