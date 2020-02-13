// concat(), lastIndexOf(), includes(), repeat(), substr(), substring()

// concat()

function myConcat(...strings) {
  let newStr = '';
  for (let i = 0; i < strings.length; i++) {
    newStr += strings[i];
  }
  return newStr;
}

console.log(myConcat('hell', 'o', ));
console.log(myConcat('Happy ', 'little ', 'accident.'));

