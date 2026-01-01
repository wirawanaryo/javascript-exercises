const findTheOldest = function(people) {
  return people.reduce((oldest, person)=> {
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const personAge = person.yearOfDeath - person.yearOfBirth;
    return personAge > oldestAge ? person : oldest;
  });
  // const currentYear = new Date().getFullYear();
  // return people.reduce((oldest, person) => {
  //   const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
  //   const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
  //   return personAge > oldestAge ? person : oldest;
  // });
};

// Do not edit below this line
module.exports = findTheOldest;
