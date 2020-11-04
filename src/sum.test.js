const { stringCalc } = require('./sum');

describe('stringCalc', () => {
	it('should add 1, 2, 3 to be 6', () => {
		expect(stringCalc("1,2,3")).toBe(6)
	})
} )

describe('stringCalc', () => {
	it('should add 4, 5, 6, 7 to be 22', () => {
		expect(stringCalc("4,5,6,7")).toBe(22)
	})
} )

describe('stringCalc', () => {
	it('should add 1, 2, 3, 4, 5, 6, 7, 8 to be 36', () => {
		expect(stringCalc("1,2,3,4,5,6,7,8")).toBe(36)
	})
} )

describe('stringCalc', () => {
	it('should add 10, 21 to be 31', () => {
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


describe('stringCalc', () => {
	it('should add ,1,2,3 to be 6', () => {
		expect(stringCalc(",1,2,3")).toBe(6)
	})
} )

//newline

describe('stringCalc', () => {
	it('should add 1 \n 2, 3 to be 6', () => {
		expect(stringCalc("1\n2,3")).toBe(6)
	})
} )


describe('stringCalc', () => {
	it('should add 1 \n 2 \n 3 to be 6', () => {
		expect(stringCalc("1\n2\n3")).toBe(6)
	})
} )


describe('stringCalc', () => {
	it('should add 1 ,\n 2 \n 3 to be 6', () => {
		expect(stringCalc("1,\n2\n3")).toBe(6)
	})
} )

describe('stringCalc', () => {
	it('should add 1 ,\n 2, 3 to be 6', () => {
		expect(stringCalc("1,\n2,3")).toBe(6)
	})
} )


describe('stringCalc', () => {
	it('should add 1 ,\n 2 ,\n 3 to be 6', () => {
		expect(stringCalc("1,\n2,\n3")).toBe(6)
	})
} )

describe('stringCalc', () => {
	it('should add 1 ,\n 2 ,\n 3 ,4 to be 10', () => {
		expect(stringCalc("1,\n2,\n3,4")).toBe(10)
	})
} )

describe('stringCalc', () => {
	it('should add 1 ,\n 2 ,\n 3 ,4\n5 to be 15', () => {
		expect(stringCalc("1,\n2,\n3,4\n5")).toBe(15)
	})
} )