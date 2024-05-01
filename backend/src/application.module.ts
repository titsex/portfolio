import { ConfigService } from '@config/service'
import { ConfigModule } from '@config/module'
import { MailerModule } from '@mailer/module'
import { AuthModule } from '@auth/module'
import { Module } from '@nestjs/common'

@Module({
	imports: [
		ConfigModule.forRoot(),
		MailerModule.forRoot({
			useFactory: (configService: ConfigService) => ({
				host: configService.get('MAILER_HOST'),
				port: configService.get('MAILER_PORT'),
				secure: true,
				auth: {
					user: configService.get('MAILER_AUTH_USER'),
					pass: configService.get('MAILER_AUTH_PASSWORD'),
				},
			}),
			inject: [ConfigService],
		}),
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class ApplicationModule {}
