const { stringCalc } = require('./sum');

describe('stringCalc', () => {
	it('should add 1 and 2 to be 3', () => {
		expect(stringCalc("1,2")).toBe(3)
	})
} )

describe('stringCalc', () => {
	it('should add 10 and 21 to be 31', () => {
		expect(stringCalc("10,21")).toBe(31)
	})
} )

describe('stringCalc', () => {
	it('should be 1', () => {
		expect(stringCalc("1")).toBe(1)
	})
} )

describe('stringCalc', () => {
	it('should be NaN', () => {
		expect(stringCalc(" ")).toBe(NaN)
	})
} )
