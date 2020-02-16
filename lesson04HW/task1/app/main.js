function countColor(carsArr) {
  const colors = getArrayOfItems(carsArr, 'COLOR');

  return colors;
}


function maxColor(carsArr) {
  const sortedColors = getArrayOfItems(carsArr, 'COLOR').sort();

  let counter = 1; 
  let mostCommonColor = sortedColors[0]; 
  let currentCounter = 1;

  const colorsLength = sortedColors.length;
  for (let i = 1; i < colorsLength; i++) {

    if (sortedColors[i] === sortedColors[i - 1]) {
      currentCounter++;
    } else {
      if (currentCounter > counter) {
        counter = currentCounter;
        mostCommonColor = sortedColors[i - 1];
      }
      currentCounter = 1;
    }

  }

  const lastColor = colorsLength - 1;
  if (currentCounter > counter) {
      counter = currentCounter;
      mostCommonColor = sortedColors[lastColor];
  }

  return mostCommonColor;
}


function countCars(carsArr) {
  const sortedOvd = getArrayOfItems(carsArr, 'OVD').sort();
  let counter = 1;

  const amountOfCars = [];
  
  const ovdLength = sortedOvd.length;
  for (let i = 1; i < ovdLength; i++) {
    if (sortedOvd[i] === sortedOvd[i - 1]) {
        counter++;
    } else {
        amountOfCars.push({OVD: sortedOvd[i], count: counter});
        counter = 1;
    }
  }

  const lastOvd = ovdLength - 1;

  amountOfCars.push({OVD: sortedOvd[lastOvd], count: counter});

  return amountOfCars;
}


function oldAndNew(carsArr) {
  const oldCar = {
    name: undefined,
    date: cars[0].THEFT_DATA,
  };

  const newCar = {
    name: undefined,
    date: cars[0].THEFT_DATA,
  };

  let car;

  const carsArrLength = carsArr.length;
  for (let i = 0; i < carsArrLength; i++) {

    car = carsArr[i];

    if (car['THEFT_DATA'] > newCar.date) {
      newCar.name = car['BRAND'];
      newCar.date = car['THEFT_DATA'];
    } 

    if (car['THEFT_DATA'] < oldCar.date) {
      oldCar.name = car['BRAND'];
      oldCar.date = car['THEFT_DATA'];
    }
  }

  return [oldCar, newCar];
}


function getArrayOfItems(carsArr, item) {
  const arr = [];
  let car;

  const carsArrLength = carsArr.length;
  for (let i = 0; i < carsArrLength; i++) {
    car = carsArr[i];
    arr.push(car[item]);
  }
  return arr;
}


// console.log(countColor(cars));
// console.log(maxColor(cars));
// console.log(countCars(cars));
// console.log(oldAndNew(cars));

