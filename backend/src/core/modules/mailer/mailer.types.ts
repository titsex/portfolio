import { Options, AuthenticationTypeCustom } from 'nodemailer/lib/smtp-transport'

export type MailerOptions = Pick<Options, 'host' | 'port' | 'secure'> & {
	auth: Pick<AuthenticationTypeCustom, 'user' | 'pass'>
}
