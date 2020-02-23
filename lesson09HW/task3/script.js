function loadUsers() {
  const amountOfUsers = 1000;
  const link = 'https://randomuser.me/api/?results=' + amountOfUsers;

  let xhr = new XMLHttpRequest();
  xhr.open('GET', link);

  xhr.onload = function() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const users = data.results;
      showInformation(users)
    }
  }
  xhr.send();
}

function getAge(users) {
  let minAge;
  const youngestUser = {};

  let maxAge;
  const oldestUser = {};

  minAge = users[0].dob.age;
  maxAge = minAge;

  users.forEach(user => {
    if (user.dob.age > maxAge) {
      maxAge = user.dob.age;

      oldestUser.age = maxAge;
      oldestUser.name = user.name.first;
      oldestUser.surname = user.name.last;
    }
    if (user.dob.age < minAge) {
      minAge = user.dob.age

      youngestUser.age = minAge;
      youngestUser.name = user.name.first;
      youngestUser.surname = user.name.last;
    }
  })

  return { 
    youngestUser,
    oldestUser
  }
}

function getAmountByGender(users) {
  let males = 0;
  let females = 0;

  users.forEach(user => {
    if (user.gender === 'male') {
      males++;
    } else {
      females++;
    }
  })

  return {
    males,
    females
  }
}

function getAverageAge(users) {
  const amountByGender = getAmountByGender(users);

  let malesAgeSum = 0;
  let femalesAgeSum = 0;

  users.forEach(user => {
    if (user.gender === 'male') {
      malesAgeSum += user.dob.age;
    } else {
      femalesAgeSum += user.dob.age
    }
  })

  const males = Math.trunc(malesAgeSum / amountByGender.males);
  const females = Math.trunc(femalesAgeSum / amountByGender.females);

  return {
    males, 
    females
  }
}

function getCity(users) {
  const cities = {};
  let maxAmountByCity = 0;
  let maxCity;

  users.forEach(user => {
    if(!cities[user.location.city]) {
      cities[user.location.city] = 1;
    } else {
      cities[user.location.city] += 1;
    }
  })


  for(let city in cities) {
    if (maxAmountByCity < cities[city]) {
      maxAmountByCity = cities[city];
      maxCity = city;
    }
  }

  return maxCity;
}

function showInformation(users) {
  const age = getAge(users);
  const amountOfPeople = getAmountByGender(users);
  const averageAge = getAverageAge(users);
  const city = getCity(users);

  const output = `
  <ul>
    <li>Youngest User: ${age.youngestUser.name} ${age.youngestUser.surname}, age ${age.youngestUser.age}</li>
    <li>Oldest User: ${age.oldestUser.name} ${age.oldestUser.surname}, age ${age.oldestUser.age}</li>
    <li>Amount of Males: ${amountOfPeople.males}</li>
    <li>Amount of Females: ${amountOfPeople.females}</li>
    <li>Average male age: ${averageAge.males}</li>
    <li>Average female age: ${averageAge.females}</li>
    <li>Most populated city: ${city}</li>
  </ul>
  `
  document.querySelector('.info').innerHTML = output;
}

document.querySelector('.info-button').addEventListener('click', loadUsers)
