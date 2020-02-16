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

// function maxColor(carsArr){
//     //Выдает в виде строки цвет наиболее часто встречаемый в массиве
//     //'ЗЕЛЕНИЙ'
// }
//
// function countCars(carsArr){
//     //Выдает массив объектов с именем ОВД и количеством автомобилей
//     // [{OVD: 'Название ОВД', count : количество_машин}, ...]
// }
//
// function oldAndNew(carsArr){
//     //Выдает массив объектов с датой и именем авто самого раннего и самого позднего в массиве
//     //[{name : 'HONDA (Мопед)', date : '2009-09-18T00:00:00'}, {name : 'ВАЗ - 2105 (Легковий автотранспорт)', date : '2012-11-30T00:00:00'}]
// }

console.log(countColor(cars));
// console.log(maxColor(cars));
// console.log(countCars(cars));
// console.log(oldAndNew(cars));


