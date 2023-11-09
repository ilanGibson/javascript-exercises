const getTheTitles = function(books) {
    const valuesArray = books.map(obj => obj.title);
    return (valuesArray);
};

getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
