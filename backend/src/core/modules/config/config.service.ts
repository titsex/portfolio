import { CONFIG_PROVIDER } from '@config/constants'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@config/types'

@Injectable()
export class ConfigService {
	constructor(@Inject(CONFIG_PROVIDER) private readonly configData: ConfigType) {}

	public get<T extends keyof ConfigType>(key: T): ConfigType[T] {
		return this.configData[key]
	}
}
