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

// lastIndexOf(string, searchValue, fromIndex)

function myLastIndexOf(str, searchValue, fromIndex = str.length) {
  let index = -1;

  if (fromIndex < 0) {
    fromIndex = 0;
  }
  if (fromIndex >= str.length) {
    fromIndex = str.length
  }
  if (!searchValue) {
    return fromIndex
  }

  for (let i = fromIndex; i >= 0;  i--) {
    console.log('i: ', i);
    if(str[i] === searchValue) {
      console.log('Got It')
      index = i;
      break; }
  }
  return index;
}

console.log(myLastIndexOf('canal', 'a'));
console.log(myLastIndexOf('canal', 'a', 2));
console.log(myLastIndexOf('canal', 'a', 0));
console.log(myLastIndexOf('canal', 'x'));
console.log(myLastIndexOf('canal', 'c', -5));
console.log(myLastIndexOf('canal', 'c', 0));
console.log(myLastIndexOf('canal', ''));
console.log(myLastIndexOf('canal', '', 2));














