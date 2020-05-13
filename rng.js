function inducecrashforrealz() {
    process.kill(process.pid, 'SIGTERM');
}
function getRandomUniformDistribution() {
    return Math.random();
}
function getRandomUniqueIdentifer() {
var s = [];
var hexDigits = "0123456789abcdef";
for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
}
s[14] = "4";
s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
s[8] = s[13] = s[18] = s[23] = "-";

var uuid = s.join("");
return uuid;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
module.exports.inducecrashforrealz = inducecrashforrealz;
module.exports.getRandomIntInclusive = getRandomIntInclusive;
module.exports.getRandomUniqueIdentifer = getRandomUniqueIdentifer;
module.exports.getRandomPoissonDistribution = getRandomPoissonDistribution;
module.exports.getRandomUniformDistribution = getRandomUniformDistribution;
module.exports.getRandomBinaryInt = getRandomBinaryInt;
module.exports.dice = dice;