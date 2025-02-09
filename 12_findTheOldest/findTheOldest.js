const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    return people.reduce((oldestPerson, person) => {
        const oldestPersonAge = ("yearOfDeath" in oldestPerson ? oldestPerson.yearOfDeath : currentYear) - oldestPerson.yearOfBirth;
        const personAge = ("yearOfDeath" in person ? person.yearOfDeath : currentYear) - person.yearOfBirth;
        return oldestPersonAge > personAge ? oldestPerson : person;
    }, people.at(0));
};

// Do not edit below this line
module.exports = findTheOldest;
