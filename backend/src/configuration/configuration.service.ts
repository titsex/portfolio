import { CONFIGURATION_PROVIDER } from './configuration.constants'
import type { Configuration } from './configuration.types'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class ConfigurationService {
	constructor(@Inject(CONFIGURATION_PROVIDER) private readonly configuration: Configuration) {}

	public get<T extends keyof Configuration>(key: T): Configuration[T] {
		return this.configuration[key]
	}
}
