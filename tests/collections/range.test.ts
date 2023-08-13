import { range } from "@/collections/range"

it("generates sequentially", () => {
  expect([...range(0, 10)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

it("generates sequentially by the step", () => {
  expect([...range(0, 10, 2)]).toEqual([0, 2, 4, 6, 8])
})
