import { HttpException } from '@nestjs/common'
import { ZodError } from 'zod'

export class ValidationException extends HttpException {
	constructor(error: ZodError) {
		super(
			{
				message: "Validation error, see the 'errors' field",
				errors: error.errors,
			},
			400
		)
	}
}
