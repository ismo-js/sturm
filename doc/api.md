## Sample
`subject::smp(sampler)`

Produces the latest value of `subject` *only* when `sampler` triggers.

### Example
```js
> [a,-,-,b,c,-,-]::smp([-,x,-,-,x,x])
[-,a,-,-,c,c]

> [a,b,c,d,e]::smp([a,-,b,-,c,-,d])
[a,-,c,-,e,-,e]
```

## Mask
`subjects::msk(funcs)`

`subjects` is a stream of streams. `msk` consults the active function.

A mask function takes two binary numbers as arguments:

1. Binary number. Each digit filled with `1` stands for an stream existing in `subjects` providing an active value; so `1011` means that the 2nd stream of 4 potential streams did not provide any value at the given time.
2. Binary number. Each digit filled with `1` stands for an stream existing in `subjects`, no matter if there is an active value; so `1111` means that there are 4 streams given without "space" inbetween.

### Example
```js
> [
>   [a,b,c,-,-,a,b,c],
>   [b,b,-,d,b,b,-,d,b],
> ]::msk([(filled, full)=>
>   filled === full ? 1 : 0 // non-exclusive or
> ]::smp(top))
[a,b,-,-,-,a,-,c]
```
