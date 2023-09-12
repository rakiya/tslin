import "@/index"
import { repeat } from "@/standards"

test("let", () => {
  const num = "123".let((it) => Number(it))
  expect(num).toEqual(123)
})

test("also", () => {
  const str = "123".also((it) => Number(it))
  expect(str).toEqual("123")
})

describe("takeIf", () => {
  test("predicate returns true", () => {
    const str = "123".takeIf((it) => it === "123")
    expect(str).toEqual("123")
  })

  test("predicate returns false", () => {
    const str = "123".takeIf((it) => it !== "123")
    expect(str).toEqual(undefined)
  })
})

describe("takeUnless", () => {
  test("predicate returns true", () => {
    const str = "123".takeUnless((it) => it === "123")
    expect(str).toEqual(undefined)
  })

  test("predicate returns false", () => {
    const str = "123".takeUnless((it) => it !== "123")
    expect(str).toEqual("123")
  })
})

test("repeat", () => {
  const actionMock = jest.fn((_: number) => {})
  repeat(10, actionMock)
  expect(actionMock.mock.calls.length).toEqual(10)
})
