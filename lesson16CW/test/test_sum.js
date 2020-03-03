import { sum } from "../app/sum.js"

export function testSum(ass) {
    describe("Checking sum function", () => {
        it("Summary of two digits", () => {
            ass.equal(sum(2, 2), 4)
        })
        it("Summary of three digits", () => {
            ass.equal(sum(2, 2, 2), 6)
        })
        it("Summary of four digits", () => {
            ass.equal(sum(4, 2, 2, 2), 10)
        })
        describe('Invalid arguments', () => {
            it("Check for string arguments", () => {
                ass.equal(sum(2, 3, 'four'), 5)
            })
            it("Check for invalid arguments", () => {
                ass.equal(sum(true, 'haha', NaN, 'four', []), 0)
            })
            it("Check for zero arguments", () => {
                ass.deepEqual(sum(), { 
                    status: 'failed',
                    description: 'No arguments' 
                })
            })
        })
    })
}