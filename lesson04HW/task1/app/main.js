// cars //Массив с объектами

function countColor(carsArr){
  const colors = [];
  let car;

  const carsArrLength = carsArr.length;
  for (let i = 0; i < carsArrLength; i++) {

    car = carsArr[i];

    for(let key in car) {
      if (key === "COLOR") {
        colors.push(car[key])
      }
    }
  }
  return colors;
}

function maxColor(carsArr) {
  const colors = countColor(carsArr);
  const sortedColors = colors.sort();

  let counter = 1; 
  let mostCommonColor = sortedColors[0]; 
  let currentCounter = 1;

  const colorsLength = sortedColors.length;
  for (let i = 1; i < colorsLength; i++) {
    if (sortedColors[i] === sortedColors[i - 1])
        currentCounter++;
    else {
        if (currentCounter > counter) {
            counter = currentCounter;
            mostCommonColor = sortedColors[i - 1];
        }
        currentCounter = 1;
    }
  }

  if (currentCounter > counter)
  {
      counter = currentCounter;
      mostCommonColor = sortedColors[colorsLength - 1];
  }

  return mostCommonColor;
}

// function countCars(carsArr){
//     //Выдает массив объектов с именем ОВД и количеством автомобилей
//     // [{OVD: 'Название ОВД', count : количество_машин}, ...]
//   const ovdCars = [];
//   const buffObj = {}
//
//   let car;
//
//   const carsArrLength = carsArr.length;
//   for (let i = 0; i < carsArrLength; i++) {
//
//     car = carsArr[i];
//
//     for(let key in car) {
//       if (key === 'OVD') {
//         buffObj.OVD = car[key]
//       }
//       ovdCars.push(buffObj)
//     }
//   }
//   return ovdCars;
// }

// function oldAndNew(carsArr){
//     //Выдает массив объектов с датой и именем авто самого раннего и самого позднего в массиве
//     //[{name : 'HONDA (Мопед)', date : '2009-09-18T00:00:00'}, {name : 'ВАЗ - 2105 (Легковий автотранспорт)', date : '2012-11-30T00:00:00'}]
// }

// console.log(countColor(cars));
// console.log(maxColor(cars));
// console.log(countCars(cars));
// console.log(oldAndNew(cars));


