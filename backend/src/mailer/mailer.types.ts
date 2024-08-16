import { Options, SentMessageInfo } from 'nodemailer/lib/smtp-transport'
import { InjectionToken } from '@nestjs/common'
import { Transporter } from 'nodemailer'

export type NodeMailerTransport = Transporter<SentMessageInfo>

export interface MailerOptions {
	inject: InjectionToken[]
	useFactory: (...args: never) => Options
}

export type { Options as NodeMailerOptions } from 'nodemailer/lib/smtp-transport'
export type { Options as NodeMailerSendOptions } from 'nodemailer/lib/mailer'
