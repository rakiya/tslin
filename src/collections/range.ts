export function* range(start: number, end: number, step: number = 1): Generator<number> {
  for (let i = start; i < end; i += step) {
    yield i
  }
}
