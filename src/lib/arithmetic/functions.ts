import { integerBetween } from '../random/functions';
import { Operator, type ChainedOperation, type ChainedOperations, type Operations } from './types';

export const additions = (limit: number, digits = 2, summands = 2): Operations => {
	const maximum = 10 ** digits - 1;
	const minimum = 7 * 10 ** (digits - 2);

	const operations: Operations = [];
	const operands = Array(summands);

	while (operations.length < limit) {
		operations.push({
			operands: Array.from(operands, () => integerBetween(minimum, maximum)),
			operator: Operator.Plus
		});
	}

	return operations;
};

export const additionsWithoutReagruping = (limit: number, digits = 2): Operations => {
	const maximum = 10 ** digits - 1;
	const minimum = 9 * 10 ** (digits - 2);

	const operations: Operations = [];

	while (operations.length < limit) {
		const minuend = integerBetween(minimum, maximum);
		const subtrahend = subtrahendWithouthReagrouping(minuend);
		const result = minuend - subtrahend;
		operations.push({
			operands: [subtrahend, result],
			operator: Operator.Plus
		});
	}

	return operations;
};

export const subtractions = (limit: number, digits = 2): Operations => {
	const maximum = 10 ** digits - 1;
	const minimum = 7 * 10 ** (digits - 2);

	const operations: Operations = [];

	while (operations.length < limit) {
		const minuend = integerBetween(minimum, maximum);
		const subtrahend = integerBetween(minimum, minuend);
		operations.push({
			operands: [minuend, subtrahend],
			operator: Operator.Minus
		});
	}

	return operations;
};

export const subtractionsWithoutReagruping = (limit: number, digits = 2): Operations => {
	const maximum = 10 ** digits - 1;
	const minimum = 9 * 10 ** (digits - 2);

	const operations: Operations = [];

	while (operations.length < limit) {
		const minuend = integerBetween(minimum, maximum);
		const subtrahend = subtrahendWithouthReagrouping(minuend);
		operations.push({
			operands: [minuend, subtrahend],
			operator: Operator.Minus
		});
	}

	return operations;
};

export const multiplications = (limit: number, multiplier_digits = 2, multiplicand_digits = 1): Operations => {
	const multiplier_maximum = 10 ** multiplier_digits - 1;
	const multiplier_minimum = 7 * 10 ** (multiplier_digits - 2);
	const multiplicand_maximum = 10 ** multiplicand_digits - 1;
	const multiplicand_minimum = 7 * 10 ** (multiplicand_digits - 2);

	const operations: Operations = [];

	while (operations.length < limit) {
		const multiplier = integerBetween(multiplier_minimum, multiplier_maximum);
		const multiplicand = integerBetween(multiplicand_maximum, multiplicand_minimum);
		operations.push({
			operands: [multiplier, multiplicand],
			operator: Operator.Multiplication
		});
	}

	return operations;
};

export const divisions = (limit: number, dividend_digits = 2, divisor_digits = 1): Operations => {
	const dividend_maximum = 10 ** dividend_digits - 1;
	const dividend_minimum = 7 * 10 ** (dividend_digits - 2);
	const divisor_maximum = 10 ** divisor_digits - 1;
	const divisor_minimum = 7 * 10 ** (divisor_digits - 2);

	const operations: Operations = [];

	while (operations.length < limit) {
		const dividend = integerBetween(dividend_minimum, dividend_maximum);
		const divisor = integerBetween(divisor_maximum, divisor_minimum);
		operations.push({
			operands: [dividend, divisor],
			operator: Operator.Division
		});
	}

	return operations;
};

export const chainedAdditionsAndSubtractions = (limit: number, digits = 2): ChainedOperations => {
	const maximum = 10 ** digits - 1;
	const minimum = 9 * 10 ** (digits - 2);

	const operations: ChainedOperation[] = [];

	let previousNumber = integerBetween(minimum, maximum);
	let previousOperand: number | null = null;

	while (operations.length < limit) {
		const number = integerBetween(minimum, maximum);
		const difference = number - previousNumber;

		if (!difference) {
			continue;
		}

		const operation: ChainedOperation = {
			previousResult: previousNumber,
			operator: difference < 0 ? Operator.Minus : Operator.Plus,
			operand: Math.abs(difference),
			result: number
		};

		if (operation.operand == previousOperand) {
			continue;
		}

		operations.push(operation);

		previousNumber = number;
		previousOperand = operation.operand;
	}

	return operations;
};

const subtrahendWithouthReagrouping = (minuend: number): number => {
	const minuendDigits = String(minuend).split('').map(Number);
	const subtrahendDigits = Array.from(minuendDigits, (digit) => integerBetween(0, digit));
	const subtrahend = Number(subtrahendDigits.join(''));

	if (subtrahend == 0 || subtrahend == minuend) {
		return subtrahendWithouthReagrouping(minuend);
	}

	return subtrahend;
};
