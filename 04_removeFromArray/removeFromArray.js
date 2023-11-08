const removeFromArray = function(array, ...itemsToRemove) {
        console.log("array: ", array);
        console.log("items to remove", itemsToRemove);

        for (const index in itemsToRemove) {
            if (array.includes(itemsToRemove[index])) {
                indexToRemove = array.indexOf(itemsToRemove[index]);
                array.splice(indexToRemove, 1);
            }
        }
        return (array);
};

console.log(removeFromArray([1,2,3,4], 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
