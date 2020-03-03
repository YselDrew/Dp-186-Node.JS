import { multi } from "../app/multi.js"

export function testMulti(ass) {
  describe("Checking multi function", () => {
    it("Multi of two digits", () => {
      ass.equal(multi(2, 2), 4)
    })
    it("Multi of three digits", () => {
      ass.equal(multi(2, 2, 2), 8)
    })
    it("Multi of four digits", () => {
      ass.equal(multi(4, 2, 2, 2), 32)
    })
  })
}
