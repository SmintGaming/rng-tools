var rngtools = require("./rng.js");
console.log("Some 6-Sided Die: " + rngtools.dice());
console.log("A Random Arbitrary Value Between 1 & 100: " + rngtools.getRandomArbitrary(1, 100));
console.log("A Random Value Between 1 & 100: " + rngtools.getRandomInt(1, 100)); 
console.log("A Random Value Between 1 & 100 (Inclusive): " + rngtools.getRandomIntInclusive(1, 100));
console.log("A Random Poisson Distribution (Mean=4): " + rngtools.getRandomPoissonDistribution(4));
console.log("A Random Uniform Distribution:  " + rngtools.getRandomUniformDistribution(4));
console.log("A Random Binary Value: " + rngtools.getRandomBinaryInt());
console.log("A Unique Identifier: " + rngtools.getRandomUniqueIdentifer());