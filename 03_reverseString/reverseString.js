const reverseString = function(s) {
    temp = []
    for (let i = s.length - 1; i >= 0; i--) {
        temp.push(s[i]);
    }
    let final = temp.join('');
    return (final);
};

// console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
