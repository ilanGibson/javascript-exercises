const repeatString = function(s, num) {

    if (num === 0) {
        return ("")
    } else if (num < 0) {
        return ("ERROR")
    }
    let temp = []
    for (let i = 0; i < num; i++) {
        temp.push(s);
    }
    let final = temp.join('');
    return (final);
};

// Do not edit below this line
module.exports = repeatString;
