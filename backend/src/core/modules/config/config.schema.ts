import { z } from 'zod'

export const ConfigSchema = z.object({
	PORT: z.coerce.number(),
	DEVELOPER_EMAIL: z.coerce.string(),

	MAILER_HOST: z.coerce.string(),
	MAILER_PORT: z.coerce.number(),
	MAILER_AUTH_USER: z.coerce.string(),
	MAILER_AUTH_PASSWORD: z.coerce.string(),
})
