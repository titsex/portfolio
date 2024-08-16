import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify'
import { ConfigurationService } from './configuration/configuration.service'
import { NestFactory, NestApplication } from '@nestjs/core'
import { ValidatorPipe } from './validator/validator.pipe'
import { ApplicationModule } from './application.module'
import { Logger } from '@nestjs/common'

const fastifyAdapter = new FastifyAdapter()
const application = await NestFactory.create<NestFastifyApplication>(ApplicationModule, fastifyAdapter)

const configuration = application.get(ConfigurationService)
const PORT = configuration.get('PORT')

application.useGlobalPipes(new ValidatorPipe())

await application.listen(PORT, () => {
	Logger.debug(`Nest application is successfully listening on port ${PORT}`, NestApplication.name)
})
