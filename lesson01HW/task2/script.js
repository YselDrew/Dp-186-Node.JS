// Your task is to sort a given string.
// Each word in the string will contain a single number.
// This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.
//
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function sortString(str) {
  let arr = str.split(" ")

  if (arr.length > 9) {
    console.log("String is too long")
    return
  }

  let buffArr = []
  let regex

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      regex = new RegExp(i)
      if (regex.test(arr[j])) {
        buffArr.push(arr[j])
      }
    }
  }

  const sortedStr = buffArr.join(" ")

  console.log("Original string: ", str)
  console.log("Sorted string: ", sortedStr)

  return sortedStr
}

sortString("is2 Thi1s T4est 3a")
sortString("4of Fo1r pe6ople g3ood th5e the2")
sortString("i9nto sai2d indi4cate th5at t3o investiga8tion an6y Typic1ally furt7her 10a")
sortString("")

