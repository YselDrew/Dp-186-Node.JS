function myPop(arr) {
  if (!arr.length) {
    return;
  }

  const popedElem = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return popedElem;
}

function push(arr, ...args) {
  for (let i = 0; i < args.length; i++) {
    arr[arr.length] = args[i];
  }

  return arr.length;
}

function myShift(arr) {
  if(!arr.length) {
    return;
  }

  const shiftedElem = arr[0];


  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return shiftedElem;
}

const arr1 = [1, 2, 10, 15];
const arr2 = [];
const arr3 = ['Hello', 'How', 'Are', 'Ya'];

console.log('Default: ', arr1);
console.log(push(arr1, 20, 30, '?'));
console.log('Changed: ', arr1);

