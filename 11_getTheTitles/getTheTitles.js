const getTheTitles = function(books) {
    const valuesArray = books.map(obj => obj.title);
    return (valuesArray);
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
