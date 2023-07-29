export {}

declare global {
  interface Object {
    let<T, R>(block: (_: T) => R): R
    also<T>(block: (_: T) => void): T
    takeIf<T>(predicate: (_: T) => boolean): T | undefined
    takeUnless<T>(predicate: (_: T) => boolean): T | undefined
  }
}

Object.prototype.let = function <T, R>(this: T, block: (_: T) => R): R {
  return block(this as T)
}

Object.prototype.also = function <T>(this: T, block: (_: T) => void): T {
  block(this as T)
  return this as T
}

Object.prototype.takeIf = function <T>(this: T, predicate: (_: T) => boolean): T | undefined {
  return predicate(this as T) ? (this as T) : undefined
}

Object.prototype.takeUnless = function <T>(this: T, predicate: (_: T) => boolean): T | undefined {
  return !predicate(this as T) ? (this as T) : undefined
}

export function repeat(times: number, action: (_: number) => void): void {
  for (let index = 0; index < times; index++) {
    action(index)
  }
}
