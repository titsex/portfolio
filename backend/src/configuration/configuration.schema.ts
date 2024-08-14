import { Type } from '@sinclair/typebox'

export const configurationSchema = Type.Object({
	PORT: Type.Number(),
})
