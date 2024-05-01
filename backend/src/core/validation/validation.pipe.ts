import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { isZodSchemaDto, validateZodSchema } from '@validation/utils'

@Injectable()
export class ZodValidationPipe implements PipeTransform {
	public transform(value: unknown, { metatype }: ArgumentMetadata) {
		if (isZodSchemaDto(metatype)) {
			return validateZodSchema(value, metatype)
		}
	}
}
