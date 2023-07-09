import "@/index"

describe("isEmpty", () => {
  test("array is empty", () => {
    expect([].isEmpty()).toEqual(true)
  })
  test("array is not empty", () => {
    expect([1].isEmpty()).toEqual(false)
  })
})

describe("isNotEmpty", () => {
  test("array is empty", () => {
    expect([].isNotEmpty()).toEqual(false)
  })
  test("array is not empty", () => {
    expect([1].isNotEmpty()).toEqual(true)
  })
})

describe("indices", () => {
  test("array is empty", () => {
    expect([].indices()).toEqual([])
  })
  test("array is not empty", () => {
    expect(["1", "2", "3"].indices()).toEqual([0, 1, 2])
  })
})

test("lastIndex", () => {
  expect(["1", "2", "3"].lastIndex()).toEqual(2)
})
