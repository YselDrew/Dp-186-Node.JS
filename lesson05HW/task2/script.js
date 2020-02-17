const arr = ['Apple', 'Banana', 'Pinapple']

// .map to .reduce
// arr.map(el => el[0]);

arr.reduce((acc, item) => {
  acc.push(item[0]);
  return acc;
}, []);


// .filter to .reduce
// arr.filter(el => el[0].toLowerCase() == 'a');

arr.reduce((acc, item) => {
  if (item[0].toLowerCase() === 'p') {
    acc.push(item);
  }
  return acc;
}, []);


// .forEach to .reduce
// arr.forEach((el, i, arr) => {
//  console.log(arr[i] = `${i + 1}: ${el};`)
// });

arr.reduce((acc, item, index) => {
  item = `${index + 1}: ${item}`;
  acc.push(item);
  return acc;
}, []);

