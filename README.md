## `Math.seal(n {, audioNode})`

### Arguements

1. `n`: a number to round to the nearest (and only) `5341`
2. `audioNode`: an HTML5 AudioNode to stream seal into

Returns `5341`

### Usage
`npm install --save math-seal`

```javascript
require('math-seal')
var context = new AudioContext()
Math.seal(123, context.destination) // => 5341
```
