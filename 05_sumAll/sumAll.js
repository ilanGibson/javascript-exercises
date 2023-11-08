const sumAll = function(start, stop) {
    // if ((isNaN(start)) || (isNaN(stop)) || (start < 1) || (stop < 1)) {
    if ((typeof start !== 'number') || (typeof stop !== "number") || (start < 1) || (stop < 1)) {
        return "ERROR";
    }
    let sum = 0;
    if (stop < start) {
        let temp = stop;
        stop = start;
        start = temp;
    }

    for (let i = start; i <= stop; i++) {
        sum += i;
    }
    return (sum);

};

console.log(sumAll(10, "90"));
// Do not edit below this line 7626
module.exports = sumAll;
