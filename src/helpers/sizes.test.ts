import { humanSize } from "./sizes"

describe("helpers/sizes", () => {
  describe("humanSize", function() {
    it("works with Bytes", () => {
      expect(humanSize(1, 0)).toEqual("1o")
    })

    it("works with kiloBytes", () => {
      expect(humanSize(1024, 0)).toEqual("1ko")
    })

    it("works with kiloBytes and precision", () => {
      expect(humanSize(4911)).toEqual("4.80ko")
      expect(humanSize(342207, 1)).toEqual("334.2ko")
    })
  })
})
