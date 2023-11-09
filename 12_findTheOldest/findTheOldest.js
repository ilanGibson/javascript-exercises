const findTheOldest = function(people) {
    const date = new Date;
    const year = date.getFullYear();
    let age = 0;
    const oldest = people.reduce((accumulator, currentValue) => {
        if (!Object.keys(currentValue).includes("yearOfDeath")) {
            age = year - currentValue.yearOfBirth;
            currentValue.yearOfDeath = year;
        } else {
            age = currentValue.yearOfDeath - currentValue.yearOfBirth;
        }
        if ((age) > (accumulator.yearOfDeath - accumulator.yearOfBirth)) {
            return currentValue;
        } else {
            return accumulator;
        }
    }, {name: 0, yearOfBirth: 0, yearOfDeath: 0});
    return oldest;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
