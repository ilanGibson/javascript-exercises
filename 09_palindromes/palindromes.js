const palindromes = function (s) {
    s = s.toLowerCase();
    let toReverse = [];
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    for (item of s) {
        if (punctuation.includes(item)) {
            continue;
        } else if (item === " ") {
            continue;
        }
        toReverse.push(item);
    }
    toReverse.reverse();
    let temp = toReverse.slice().reverse();
    console.log(temp.join(""));
    console.log(toReverse.join(""));
    if (temp.join("") === toReverse.join("")) {
        return (true);
    } else {
        return (false);
    }
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;
