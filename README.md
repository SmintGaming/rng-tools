# A Random Number Generator Toolkit 4 Node.js

## Usage

**Importing**
```javascript
var rngtools = require("rng-tools");
```

**Then Calling The Functions**
```javascript
rngtools.dice()  // =>
rngtools.getRandomArbitrary(1, 100)  // =>  33.34029447094433
rngtools.getRandomInt(1, 100)  // =>  17
rngtools.getRandomIntInclusive(1, 100)  // =>  54
rngtools.getRandomPoissonDistribution(4)  // =>  (Mean = 4)   6
rngtools.getRandomUniformDistribution()  // =>  0.7782257379218214
rngtools.getRandomGammaDistribution(Comming Soon;)  // => Comming Soon   ;)
rngtools.getRandomBinaryInt()  // =>  0
rngtools.getRandomUniqueIdentifer()  // =>  55730a9c-4378-4ebc-9fcb-341f026d1ff3
```


## API
`getRandomUniformDistribution()`

The **getRandomUniformDistribution()** function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range.

`getRandomInt(min, max)`

The **getRandomInt()** function returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.

`getRandomIntInclusive(min, max)`

While the **getRandomInt()** function above is inclusive at the minimum, it's exclusive at the maximum. What if you need the results to be inclusive at both the minimum and the maximum? The **getRandomIntInclusive()** function below accomplishes that.

`getRandomBinaryInt()`

The **getRandomBinaryInt()** function returns a binary, pseudo-random number.

`getRandomArbitrary(min, max)`

The **getRandomArbitrary** function returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.

`getRandomPoissonDistribution(mean)`

The **getRandomPoissonDistribution()** function returns a random poisson distributed values based on the mean given.

`getRandomGammaDistribution(Comming Soon ;)`

The **getRandomGammaDistribution()** function is comming soon.

`getRandomUniqueIdentifer()`

The **getRandomUniqueIdentifer()** function returns a random UUID (Universally Unique Identifier) using a pseudo-random number generator. 

`inducecrashforrealz()`

The **inducecrashforrealz()** function crashes the main node.js process by using the *process.kill* method by suppling the arguments with the **Process PID** of the node.js process. Which we can find with *process.pid* method.