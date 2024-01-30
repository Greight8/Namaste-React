import { sum } from "../Sum"

test('sum function should calculate sum of numbers', () => {
    // 1) testing sum func
    const result = sum(2, 3)

    // 2) this line is called Assertion
    expect(result).toBe(5)
    // expect(result).toBe(6)
})
