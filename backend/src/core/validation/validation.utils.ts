import { ValidationException } from '@validation/exception'
import { ZodSchemaDtoType } from '@validation/types'
import { ArgumentMetadata } from '@nestjs/common'
import { ZodSchema } from 'zod'

export function createZodSchemaDto<T = unknown>(schema: ZodSchema<T>) {
	class ZodSchemaDto {
		public static schema = schema

		public static create(value: unknown) {
			return ZodSchemaDto.schema.parse(value)
		}
	}

	return ZodSchemaDto as unknown as ZodSchemaDtoType<T>
}

export function validateZodSchema(value: unknown, metatype: ArgumentMetadata['metatype']) {
	if (!isZodSchemaDto(metatype)) return

	const schema = metatype.schema

	const result = schema.safeParse(value)

	if (!result.success) {
		throw new ValidationException(result.error)
	}

	return result.data
}

export function isZodSchemaDto<T>(metatype: unknown): metatype is ZodSchemaDtoType<T> {
	if (typeof metatype === 'function' && metatype) {
		if ('schema' in metatype && metatype.schema instanceof ZodSchema) {
			return true
		}
	}

	return false
}
