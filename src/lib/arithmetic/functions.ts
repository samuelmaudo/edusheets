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
