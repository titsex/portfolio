import { SchemaTypes } from '@vinejs/vine/build/src/types'
import vine, { errors, VineObject } from '@vinejs/vine'
import { ArgumentMetadata } from '@nestjs/common'
import { ValidatorException } from './validator.exception'

export function createValidatorSchema<
	P extends Record<string, SchemaTypes>,
	I extends {},
	O extends {},
	C extends {},
>(schema: VineObject<P, I, O, C>) {
	return class ValidatorSchema {
		public static schema = schema
	}
}

export async function validateSchema(value: unknown, { metatype }: ArgumentMetadata) {
	if (!metatype) {
		return
	}

	if (
		typeof metatype === 'function' &&
		'schema' in metatype &&
		metatype.schema instanceof VineObject
	) {
		const { validate } = vine.compile(metatype.schema)

		try {
			return await validate(value)
		} catch (error) {
			if (error instanceof errors.E_VALIDATION_ERROR) {
				throw new ValidatorException(error.messages)
			}
		}
	}

	return
}
