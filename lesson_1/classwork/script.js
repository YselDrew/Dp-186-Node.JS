// Create a function nextVersion, that will take a string in parameter, 
// and will return a string containing the next version number.
//
// For example:
// nextVersion("1.2.3") === "1.2.4";
// nextVersion("0.9.9") === "1.0.0";
// nextVersion("1") === "2";
// nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
// nextVersion("9.9") === "10.0";
//
// Rules
// All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and


function nextVersion(str) {
  let arr;
  arr = str.split('.')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i])
  }

  arr[arr.length - 1]++

  for (let i = arr.length - 1; i > 0; i--) {
    if(arr[i] === 10) {
      arr[i] = 0
      arr[i - 1]++
    }
  }
  
  const newVersion = arr.join('.')

  console.log('Actual version: ', str)
  console.log('Next version: ', newVersion)

  return newVersion
}

nextVersion("1.2.3")
nextVersion("0.9.9")
nextVersion("1")
nextVersion("1.2.3.4.5.6.7.8")
nextVersion("9.9")

