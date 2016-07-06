# sтurm API
```
     ___          ____    _____    _   _    _ ___   _ ______
    / _ \        / ___⟩  |_   _|  | | | |  | ˇ__/  | ˇ      \
   ⟨ ⟨.⟩ ⟩       \__  \    | |    | `–´ |  | |     | ,^. ,^. |
    \_\_/        ⟨____/    |_|    `.___,´  |_|     |_| |_| |_|

```

## Logics
### And
`subjects::and()`

Produces each stream of `subjects`, but each of them itself only produce a value when *all* other `subjects` produce something at the same time. When *one* `subject` ends, every stream ends.

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

// how to map to constant value
> [[a]::fill(), x]::and()[0]
x’ // x, but all values replaced with a
```

### Exclusive Or (`xor`)
`subjects::xor()`

Produces each stream of `subjects`, but each of them itself only produce a value when *no* other `subject` produces something at the same time.

#### Example
```js
> [
>   [a,-,b,c],
>   [p,-,-,q,r],
> ]::xor()
[
  [-,-,b,-],
  [-,-,-,-,r],
]
```


### Unique
`subjects::unique()`

Produces each `subject`, but each of them itself only produce the value at a specific point of time if it's unique compared to all other values at the given point of time.

#### Example
```js
> [
>   [a,-,b,c],
>   [b,-,-,c,a],
> ]::unique()
[
  [a,-,b,-],
  [b,-,-,-,a],
]
```


## Mappings
### Cross
`subjects::cross()`

Produces a stream at any point of time where at least one `subject` has a value. Each of these stream contains the value of all `subjects` at this specific point of time.

#### Example
```js
> [
>   [a,b,a]
>   [c,d,d],
>   [e,e,f,g],
> ]::cross()
[
  [a,c,e],
  [b,d,e],
  [a,d,f],
  [-,-,g],
]
```

### Map
`subjects::map()`

Applies `subject[0][x]` to `subject[1][x]`; applies the resulting function on `subject[2][x]`… Produces the final results of these applications and `NIL` at points of time where not all values are given. Ends when a value gets mapped to `FIN`.

#### Example
```js
> [
>   [(x,y)=> x]::fill(),
>   [a,b],
>   [-,c,d],
> ]::map()
[-,b]
```


### Filter
`subjects::filter()`

The same as `map`, but the return value isn't produced, but it's boolean value is used to decide if the original value should be left in the result stream or not.

#### Example
```js
> [
>   [x=> x%2]::fill(),
>   [1,5,8],
> ]::filter()
[1,5,-]
```


### Reduce
`subjects::reduce(initial)`

The same as `map`, but finally applies the result of `subject[n-1][x](subject[n][x])` on the final result of the application at the last point of time. If this memorized result isn't given, `reduce` starts out with `initial`. Ignores points of time where not all values are given. Ends when the shortest `subject` ends.

#### Example
```js
> [
>   [(n, o)=> n+o]::fill(),
>   [1,2,3],
> ]::reduce(1)
[2,4,7]
```


## Finings
### Blank
`subject::blank()`

Returns `true` if the stream is blank. A blank stream ends immediately.

```js
> {length: 0}::blank()
true

> []::blank()
true
```

### Combine
`subjects::combine()`

Produces a value when *any* of the `subjects` produces. When there are multiple values at the same point of time, the first `subject` wins. Ends when *all* `subjects` end.

#### Example
```js
> [
>   [-,a,b],
>   [-,-,p,q],
> ]::combine()
[-,a,b,q]

// how to resolve promises
> [pr1, pr2]::dispose()::combine()
[-,-,-,result[pr1],result[pr2]]
```
