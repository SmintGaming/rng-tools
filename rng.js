function getRandomUniformDistribution() {
    return Math.random();
}
function getRandomUniqueIdentifer() {
    return Math.random() * getRandomArbitrary(1,0) + JSON.stringify(Date.now());
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBinaryInt() {
    min = 0;
    max = 1;
    return Math.round(Math.random() * (max - min + 1)) + min;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPoissonDistribution(mean) {
    var L = Math.exp(-mean);
    var p = 1, k = 0;

    do {
        k++;
        p *= Math.random();
    } while (p > L);

    return k - 1;
}



function dice() {
    global.n = Math.random(); //?
    n = n * 6; //?
    n = Math.round(n); //?
    return n;
}

module.exports.getRandomArbitrary = getRandomArbitrary;
module.exports.getRandomInt = getRandomInt;
module.exports.getRandomIntInclusive = getRandomIntInclusive;
module.exports.getRandomUniqueIdentifer = getRandomUniqueIdentifer;
module.exports.getRandomPoissonDistribution = getRandomPoissonDistribution;
module.exports.getRandomUniformDistribution = getRandomUniformDistribution;
module.exports.getRandomBinaryInt = getRandomBinaryInt;
module.exports.dice = dice;