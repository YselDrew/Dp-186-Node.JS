// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one
// in the binary representation of that number.
// You can guarantee that input is non-negative.
//
// Example: The binary representation of 1234 is 10011010010,
// so the function should return 5 in this case

function calcAmountOfOne(number) {
  if (number < 0) {
    console.log('Value shouldn\'t be negative')
    return
  }

  const binaryNumberStr = number.toString(2)
  const noZeroStr = binaryNumberStr.replace(/0+/gi, "")
  const amountOfOneBit = noZeroStr.length

  return amountOfOneBit
}

console.log(calcAmountOfOne(1234)) // 10011010010 -> 5
console.log(calcAmountOfOne(1)) // 1 -> 1
console.log(calcAmountOfOne(31)) // 11111 -> 5
console.log(calcAmountOfOne(1025)) // 10000000001 -> 2
console.log(calcAmountOfOne(175)) // 10101111 -> 6
console.log(calcAmountOfOne(0)) // 10101111 -> 6
console.log(calcAmountOfOne(-134)) // 10101111 -> 6

