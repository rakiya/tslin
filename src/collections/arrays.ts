export {}

declare global {
  interface Array<T> {
    isEmpty(): boolean
    isNotEmpty(): boolean
    indices(): Array<number>
    lastIndex(): number
    groupBy<K, T>(keySelector: (_: T) => K): Map<K, T[]>
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

Array.prototype.groupBy = function <K, T>(keySelector: (_: T) => K): Map<K, T[]> {
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
