export enum Operator {
	Plus = '+',
	Minus = '−',
	Multiplication = '×',
	Division = '÷'
}

export type Operands = number[];

export interface Operation {
	operands: Operands;
	operator: Operator;
}

export type Operations = Operation[];

export interface ChainedOperation {
	previousResult: number;
	operator: Operator;
	operand: number;
	result: number;
}

export type ChainedOperations = ChainedOperation[];
