## Sample
`subject::smp(sampler)`

Produces the latest value of `subject` *only* when `sampler` triggers.

### Example
```js
> [a,-,-,b,c,-,-]::smp([-,x,-,-,x,x])
[-,a,-,-,c,c]

> [a,b,c,d,e]::smp([a,-,b,-,c])
[a,-,c,-,e]
```

## Mask
`subjects::msk(funcs)`

`subjects` is a stream of streams.
Produces when one of the streams
