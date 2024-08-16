import { HttpException } from '@nestjs/common'

interface ValidatorErrorMessage {
	message: string
	rule: string
	field: string
}

export class ValidatorException extends HttpException {
	constructor(public errors: ValidatorErrorMessage[]) {
		super(
			{
				errors,
				error: 'Validation failed',
				statusCode: 422,
			},
			422,
		)
	}
}
