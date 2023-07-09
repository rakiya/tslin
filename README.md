# tslin

Rich methods like Kotlin for TypeScript

## Installation

You can install through the npm registry.

```shell
$ npm install @rakiya/tslin
```

Follow our installing guide for more information.

## Example

```typescript
import "@rakiya/tslin"

const countOfWords = "This is an example.".let((s: string) => s.split(" ").length)
console.log(countOfWords) // 4
```

## Available Methods

### Object

- `Object.let<T, R>(block: (_: T) => R): R`
- `Object.also<T>(block: (_: T) => void): T`
- `Object.takeIf<T>(predicate: (_: T) => boolean): T | undefined`
- `Object.takeUnless<T>(predicate: (_: T) => boolean): T | undefined`

### Array

- `Array.isEmpty(): boolean`
- `Array.isNotEmpty(): boolean`
- `Array.indices(): Array<number>`
- `Array.lastIndex(): number`
