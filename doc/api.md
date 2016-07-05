# sтurm API
```
     ___          ____    _____    _   _    _ ___   _ ______
    / _ \        / ___⟩  |_   _|  | | | |  | ˇ__/  | ˇ      \
   ⟨ ⟨.⟩ ⟩       \__  \    | |    | `–´ |  | |     | ,^. ,^. |
    \_\_/        ⟨____/    |_|    `.___,´  |_|     |_| |_| |_|

```

## Ranges
### Fill
`subject::fill()`

Produces the latest value till the next value arrives and never ends.

#### Example
```js
> [a,-,-,b,c,-,-]::fill()
[a,a,a,b,c,c…>

> [a,b,c,d,e]::fill()
[a,b,c,d,e,e…>

> []::fill()
[> //endless stream
```


### Succeed
`subjects::succeed()`

Produces each stream of `subjects`, but each of them starts not until the stream *before* has finished.

#### Example
```js
> [
>   [a,b,a],
>   [b,a,b],
>   [a,b,a],
> ]::succeed()
[
  [a,b,a],
  [-,-,-,b,a,b],
  [-,-,-,-,-,-,a,b,a],
]

// how to eliminate pauses between values
> [x,x]::succeed()[1]
x’ //x, but all values succeeding each other directly.
```

## Logics
### And
`subjects::and()`

Produces each stream of `subjects`, but each of them itself only produces a value when *all* other `subjects` produce something at the same time. When *one* `subject` ends, every stream ends.

#### Example
```js
> [
>   [a,b,c,-,a,b,c],
>   [b,b,-,d,b,-,d,b],
> ]::and()
[
  [a,b,-.-,a,-,c],
  [b,b,-,-,b,-,d],
]
```

### Exclusive Or (`xor`)
`subjects::xor()`

Produces each stream of `subjects`, but each of them itself only produces a value when *no* other `subject` produces something at the same time.

#### Example
```js
> [
>   [a,-,b,c],
>   [p,-,-,q,r],
> ]
[
  [-,-,b,-],
  [-,-,-,-,r],
]
```

## Mappings
### Map
`subjects::map()`

Applies `subject[0][x]` to `subject[1][x]`; applies the resulting function on `subject[2][x]`… Does nothing at points of time where not all values are given. Ends when the shortest `subject` ends.

#### Example
```js
> [
>   [(x,y)=> x]::fill(),
>   [a,b],
>   [-,c,d],
> ]
[-,b]
```

### Reduce
`subjects::reduce()`

The same as `map`, but finally applies the result of `subject[n-1][x](subject[n][x])` on the final result of the application at the last point of time. Ignores points of time where not all values are given. Ends when the shortest `subject` ends.


## Finings
### Merge
`subjects::merge()`

Produces a value when *any* of the `subjects` produces. When there are multiple values at the same point of time, the first `subject` wins. Ends when *all* `subjects` end.

#### Example
```js
> [
>   [-,a,b],
>   [-,-,p,q],
> ]::merge()
[-,a,b,q]
```
