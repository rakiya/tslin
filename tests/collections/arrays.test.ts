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

describe("groupBy", () => {
  test("array is not empty", () => {
    expect([1, 2, 3].groupBy((e) => e % 2 === 0)).toEqual(
      new Map([
        [true, [2]],
        [false, [1, 3]],
      ]),
    )
  })
})

describe("zip", () => {
  test("The target is longer", () => {
    const target = [1, 2, 3]
    const other = ["a", "b"]
    expect(target.zip(other)).toEqual([
      [1, "a"],
      [2, "b"],
    ])
  })

  test("The other is longer", () => {
    const target = [1, 2]
    const other = ["a", "b", "c"]
    expect(target.zip(other)).toEqual([
      [1, "a"],
      [2, "b"],
    ])
  })
})

describe("sample", () => {
  test("The array has a element", () => {
    expect([1].sample()).toEqual([1])
  })

  test("The array is many elements", () => {
    const target = ["a", "b", "c", "d", "e", "f", "g"]
    const samples = target.sample(2)
    console.log(samples)
    expect(target).toContain(samples[0])
    expect(target).toContain(samples[1])
  })
})

describe("shuffle", () => {
  test("The array has a element", () => {
    expect(["a"].shuffle()).toEqual(["a"])
  })

  test("The array is many elements", () => {
    const target = ["a", "b", "c", "d", "e", "f", "g"]
    const shuffled = target.shuffle()
    console.log(shuffled)
    expect(shuffled).not.toEqual(target)
    shuffled.forEach((it) => expect(target).toContain(it))
  })
})

describe("sortBy", () => {
  class Element {
    constructor(readonly value: number) {}
  }

  it("sorts in ascending order", () => {
    const elements = [new Element(1), new Element(2), new Element(3), new Element(4), new Element(5)]

    expect(elements.shuffle().sortBy((it) => it.value)).toEqual(elements)
  })

  it("sorts in descending order", () => {
    const elements = [new Element(1), new Element(2), new Element(3), new Element(4), new Element(5)]

    expect(elements.shuffle().sortBy((it) => -it.value)).toEqual(elements.reverse())
  })
})

describe("maxByOrUndefined", () => {
  class Element {
    constructor(readonly value: number) {}
  }

  describe("An array is empty", () => {
    it("returns undefined", () => {
      expect(new Array<Element>().maxByOrUndefined((it) => it.value)).toBeUndefined()
    })
  })

  describe("An array has an element", () => {
    it("returns the first element", () => {
      const elements = [new Element(1)]
      expect(elements.maxByOrUndefined((it) => it.value)).toEqual(elements[0])
    })
  })

  describe("An array has many elements", () => {
    it("returns the element having a max value", () => {
      const elements = [new Element(1), new Element(3), new Element(2)]
      expect(elements.maxByOrUndefined((it) => it.value)).toEqual(elements[1])
    })
  })
})

describe("minByOrUndefined", () => {
  class Element {
    constructor(readonly value: number) {}
  }

  describe("An array is empty", () => {
    it("returns undefined", () => {
      expect(new Array<Element>().minByOrUndefined((it) => it.value)).toBeUndefined()
    })
  })

  describe("An array has an element", () => {
    it("returns the first element", () => {
      const elements = [new Element(1)]
      expect(elements.minByOrUndefined((it) => it.value)).toEqual(elements[0])
    })
  })

  describe("An array has many elements", () => {
    it("returns the element having a min value", () => {
      const elements = [new Element(2), new Element(1), new Element(3)]
      expect(elements.minByOrUndefined((it) => it.value)).toEqual(elements[1])
    })
  })
})

describe("firstOrUndefined", () => {
  describe("An array is empty", () => {
    it("returns undefined", () => {
      expect(new Array<number>().firstOrUndefined()).toBeUndefined()
    })
  })

  describe("An array has many elements", () => {
    it("returns the first element", () => {
      const elements = [1, 2, 3]
      expect(elements.firstOrUndefined()).toEqual(1)
    })
  })
})

describe("lastOrUndefined", () => {
  describe("An array is empty", () => {
    it("returns undefined", () => {
      expect(new Array<number>().lastOrUndefined()).toBeUndefined()
    })
  })

  describe("An array has many elements", () => {
    it("returns the last element", () => {
      const elements = [1, 2, 3]
      expect(elements.lastOrUndefined()).toEqual(3)
    })
  })
})
