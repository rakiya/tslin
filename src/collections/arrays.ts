export {}

declare global {
  interface Array<T> {
    isEmpty(): boolean
    isNotEmpty(): boolean
    indices(): Array<number>
    lastIndex(): number
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
