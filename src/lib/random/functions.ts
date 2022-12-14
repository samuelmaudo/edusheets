// The maximum is inclusive and the minimum is inclusive
export const integerBetween = (minimum: number, maximum: number): number => {
	minimum = Math.ceil(minimum);
	maximum = Math.floor(maximum);

	return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};
