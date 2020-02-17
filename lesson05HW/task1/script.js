function myPop(arr) {
  const popedElem = arr[arr.length - 1];
  arr.length = arr.length - 1

  return popedElem;
}

const arr1 = [1, 2, 10, 15];

console.log('Default: ', arr1)
console.log(myPop(arr1));
console.log('Changed: ', arr1)
