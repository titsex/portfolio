import { ZodSchema } from 'zod'

export type ZodSchemaDtoType<T = unknown> = {
	new (): T
	schema: ZodSchema
	isDto: boolean
}
