import { repeat } from ".."
import { range } from "./range"

export {}

declare global {
  interface Array<T> {
    isEmpty(): boolean
    isNotEmpty(): boolean
    indices(): Array<number>
    lastIndex(): number
    groupBy<K, T>(this: Array<T>, keySelector: (_: T) => K): Map<K, T[]>
    zip<U>(other: Array<U>): Array<[T, U]>
    sample(count?: number): Array<T>
    shuffle(): Array<T>
    sortBy<T, R extends number | bigint>(this: Array<T>, selector: (_: T) => R): Array<T>
    maxByOrUndefined<T, R extends number | bigint>(this: Array<T>, selector: (_: T) => R): T | undefined
    minByOrUndefined<T, R extends number | bigint>(this: Array<T>, selector: (_: T) => R): T | undefined
    firstOrUndefined(): T | undefined
    lastOrUndefined(): T | undefined
  }
}

Array.prototype.isEmpty = function (): boolean {
  return this.length === 0
}

Array.prototype.isNotEmpty = function (): boolean {
  return !this.isEmpty()
}

Array.prototype.indices = function (): Array<number> {
  return [...Array(this.length).keys()]
}

Array.prototype.lastIndex = function (): number {
  return this.length - 1
}

Array.prototype.groupBy = function <K, T>(this: Array<T>, keySelector: (_: T) => K): Map<K, T[]> {
  const result = new Map<K, T[]>()

  this.forEach((element) => {
    const key = keySelector(element)
    const value = result.get(key)

    if (value !== undefined) {
      value.push(element)
    } else {
      result.set(key, [element])
    }
  })

  return result
}

Array.prototype.zip = function <T, U>(this: Array<T>, other: Array<U>): Array<[T, U]> {
  const n = Math.min(this.length, other.length)
  const zipped = new Array(n)

  repeat(n, (i) => (zipped[i] = [this[i], other[i]]))

  return zipped
}

Array.prototype.sample = function <T>(this: Array<T>, sampleSize: number = 1): Array<T> {
  let indices = [...range(0, this.length)]
  const size = indices.length

  repeat(size, (i: number) => {
    const j = i + Math.floor(Math.random() * (size - i))
    let tmp = indices[i]
    indices[i] = indices[j]
    indices[j] = tmp
  })

  return indices
    .slice(0, sampleSize)
    .sort()
    .map((i) => this[i])
}

Array.prototype.shuffle = function <T>(this: Array<T>): Array<T> {
  let indices = [...range(0, this.length)]
  const size = indices.length

  repeat(size, (i: number) => {
    const j = i + Math.floor(Math.random() * (size - i))
    let tmp = indices[i]
    indices[i] = indices[j]
    indices[j] = tmp
  })

  return indices.map((i) => this[i])
}

Array.prototype.sortBy = function <T, R extends number | bigint>(
  this: Array<T>,
  selector: (_: T) => R,
): Array<T> {
  return this.sort((e1, e2) => selector(e1) - selector(e2))
}

Array.prototype.maxByOrUndefined = function <T, R extends number | bigint>(
  this: Array<T>,
  selector: (_: T) => R,
): T | undefined {
  if (this.isEmpty()) {
    return undefined
  }

  let maxElement = this[0]
  if (this.length === 1) {
    return maxElement
  }

  let maxValue = selector(maxElement)
  for (let i of range(1, this.length)) {
    let e = this[i]
    let v = selector(e)
    if (maxValue < v) {
      maxElement = e
      maxValue = v
    }
  }

  return maxElement
}

Array.prototype.minByOrUndefined = function <T, R extends number | bigint>(
  this: Array<T>,
  selector: (_: T) => R,
): T | undefined {
  if (this.isEmpty()) {
    return undefined
  }

  let minElement = this[0]
  if (this.length === 1) {
    return minElement
  }

  let minValue = selector(minElement)
  for (let i of range(1, this.length)) {
    let e = this[i]
    let v = selector(e)
    if (v < minValue) {
      minElement = e
      minValue = v
    }
  }

  return minElement
}

Array.prototype.firstOrUndefined = function <T>(): T | undefined {
  if (this.isEmpty()) {
    return undefined
  }

  return this[0]
}

Array.prototype.lastOrUndefined = function <T>(): T | undefined {
  if (this.isEmpty()) {
    return undefined
  }

  return this[this.lastIndex()]
}
