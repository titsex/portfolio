import { ConfigModule } from '@config/module'
import { MailerModule } from '@mailer/module'
import { AuthModule } from '@auth/module'
import { Module } from '@nestjs/common'

@Module({
	imports: [
		ConfigModule.forRoot(),
		MailerModule.forRoot({
			host: process.env.MAILER_HOST!,
			port: Number.parseInt(process.env.MAILER_PORT!),
			secure: true,
			auth: {
				user: process.env.MAILER_AUTH_USER!,
				pass: process.env.MAILER_AUTH_PASSWORD!,
			},
		}),
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class ApplicationModule {}
