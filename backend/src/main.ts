import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify'
import { ApplicationModule } from '@application/module'
import { ZodValidationPipe } from '@validation/pipe'
import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'

const fastifyAdapter = new FastifyAdapter()

const application = await NestFactory.create<NestFastifyApplication>(ApplicationModule, fastifyAdapter)

application.useGlobalPipes(new ZodValidationPipe())

const PORT = Number.parseInt(process.env.PORT!) || 7000

await application.listen(PORT, () => {
	Logger.debug(`Nest application is successfully listening on port ${PORT}`, 'NestApplication')
})
