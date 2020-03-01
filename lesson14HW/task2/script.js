function findPartMaxProd(number) {
  const arr = [];
  let lastElemIndex = 0;  
  arr.push(number);  

  let mult = 1;
  let resultArr;

  while (true) {
    const multiplition = getMultiply(arr);
    console.log();
    console.log('NEW PART');
    console.log(arr, lastElemIndex);
    if (mult <= multiplition) {
      mult = multiplition;
      resultArr = [...arr];
    }

    let partition = 0;

    //checks for 1
    for (let i = arr.length - 1; i >= 0; i--) {
      if (lastElemIndex >= 0 && arr[lastElemIndex] === 1) {
        partition += arr[lastElemIndex]; 
        lastElemIndex--;
        console.log('First Cycle: ', partition, lastElemIndex);
      }
    }

    // if all values === 1 returns result
    if (lastElemIndex < 0) {
      // console.log([resultArr, mult])
      return [resultArr, mult];
    }
    console.log('before:', arr, partition)
    arr[lastElemIndex]--; // 8 -> 7
    partition++; // 0 -> 1
    console.log('after:', arr, partition)

    for (let i = 0; i < arr.length; i++) {
      if (partition > arr[lastElemIndex]) {
        arr[lastElemIndex + 1] = arr[lastElemIndex];
        partition = partition - arr[lastElemIndex];
        lastElemIndex++;
        console.log('Seconds cycle:', partition, lastElemIndex);
      }
    }

    arr[lastElemIndex + 1] = partition;
    lastElemIndex++;
    console.log('newArr', arr, 'last elem i: ', lastElemIndex, )
  }
}

function getMultiply(arr) {
  return arr.reduce((acc, item) => acc*item);
} 

findPartMaxProd(8);
