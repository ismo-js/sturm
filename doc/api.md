# sтurm API
```
    ___          ___    _____    _   _    _ ___   _ _ _
   / _ \        / __⟩  |_   _|  | | | |  | ˇ__/  | ˇ ˇ \
  | |.| |       \__ \    | |    | `–´ |  | |     | | | |
   \_\_/        ⟨___/    |_|    `.___.´  |_|     |_|_|_|

```

### Fill
`subject::fill()`

Produces the latest value till the next value arrives.

#### Example
```js
> [a,-,-,b,c,-,-]::fill()
[a,a,a,b,c,c…>

> [a,b,c,d,e]::fill()
[a,b,c,d,e,e…>

> []::fill()
[> //endless stream
```


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


### Align
`subjects::align()`

Produces each stream of `subjects`, but each of them starts not until the stream *before* has finished.

#### Example
```js
> [
>   [a,b,a],
>   [b,a,b],
>   [a,b,a],
> ]::align()
[
  [a,b,a],
  [-,-,-,b,a,b],
  [-,-,-,-,-,-,a,b,a],
]
```
