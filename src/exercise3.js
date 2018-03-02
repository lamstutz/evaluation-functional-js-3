const _ = require('lodash');

const meeteek = input => {
  return input.reduce((acc, people) => {
    acc[people.firstname] = input
      .filter(peopleToFilter => people.firstname !== peopleToFilter.firstname)
      .filter(peopleToFilter => bidirectionnalSexApproved(peopleToFilter, people))
      .filter(peopleToFilter => bidirectionnalInterestsApproved(peopleToFilter, people))
      .map(peopleToFormat => formatPeople(peopleToFormat, people))
      .sort(sortByAffinity);
    return acc;
  }, {});

};

const bidirectionnalSexApproved = (people1, people2) => people1.sexPartnerApproved.includes(people2.sex) && people2.sexPartnerApproved.includes(people1.sex);
const bidirectionnalInterestsApproved = (people1, people2) => (_.intersection(people1.interests, people2.interests).length >= 1);
const formatPeople = (people, referentPeople) => ({ firstname: people.firstname, commonInterests: _.intersection(people.interests, referentPeople.interests) });
const sortByAffinity = (people1, people2) => people2.commonInterests.length - people1.commonInterests.length;

module.exports = {
  title: 'Exercise 3',
  run: meeteek
};
