import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { validateSchema } from './validator.utils'

@Injectable()
export class ValidatorPipe implements PipeTransform {
	public transform(value: unknown, metadata: ArgumentMetadata) {
		return validateSchema(value, metadata)
	}
}
