# sтurm API
```
     ___          ____    _____    _   _    _ ___   _ ______
    / _ \        / ___⟩  |_   _|  | | | |  | ˇ__/  | ˇ      \
   | |.| |       \__  \    | |    | `–´ |  | |     | ,^. ,^. |
    \_\_/        ⟨____/    |_|    `.___.´  |_|     |_| |_| |_|

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

TODO which behavior?

#### Example
```js
> [
>   [(x,y)=> x]::fill(),
>   [a,b],
>   [-,c,d],
> ]
[-,b]
```


## Finings
//### Merge
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
