import vine from '@vinejs/vine'

export const configurationSchema = vine.object({
	PORT: vine.number(),
	DEVELOPER_EMAIL: vine.string().email(),

	MAILER_HOST: vine.string(),
	MAILER_PORT: vine.number(),
	MAILER_AUTH_USER: vine.string(),
	MAILER_AUTH_PASSWORD: vine.string(),
})
