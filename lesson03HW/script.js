// concat()
function myConcat(...strings) {
  let newStr = '';
  for (let i = 0; i < strings.length; i++) {
    newStr += strings[i];
  }
  return newStr;
}


// lastIndexOf(string, searchValue, fromIndex)
function myLastIndexOf(str, searchValue, fromIndex = str.length) {
  let index = -1;
  let checkWord;

  if (fromIndex < 0) {
    fromIndex = 0;
  }
  if (fromIndex >= str.length) {
    fromIndex = str.length;
  }
  if (!searchValue) {
    return fromIndex;
  }

  let searchValueLength = searchValue.length;

  for (let i = fromIndex; i >= 0;  i--) {
    if(str[i] === searchValue[0]) {
      checkWord = mySubstr(str, i, searchValueLength);
      if (checkWord === searchValue) {
        index = i;
        break; 
      }
    }
  }
  return index;
}

console.log(myLastIndexOf('HelloWorld', 'Hellop'))

// myIncludes (string, searchValue, fromIndex)
function myIncludes(str, searchValue, position = 0) {
  let checkWord;

  if (position < 0) {
    position = str.length + position - 1;
  }

  if (!searchValue) {
    return true;
  }

  let searchValueLength = searchValue.length;

  for (let i = position; i < str.length;  i++) {
    if(str[i] === searchValue[0]) {
      checkWord = mySubstr(str, i, searchValueLength);
      if (checkWord === searchValue) {
        return true;
      }
    }
  }
  return false;
}


// repeat(str, count)
function myRepeat(str, count = 0) {
  if (count < 0) {
    throw new RangeError('Value shouldn\'t be less than 0');
  }
  if (count === Infinity) {
    throw new RangeError('Value should be less than infinity');
  }

  let newStr = '';

  for (let i = 1; i <= count; i++) {
    newStr += str;
  }

  return newStr;
}


// substr(str, start, length)
function mySubstr(str, start, length = str.length - start) {
  let newStr = '';
  const newStrLength = start + length;

  if (length <= 0) {
    return newStr;
  }
  
  if (start < 0) {
    start = str.length + start;
  }

  if (start >= str.length) {
    return newStr;
  }

  for (let i = start; i < newStrLength; i++) {
    if (i > str.length - 1) {
      return newStr;
    }
    newStr += str[i];
  }
  return newStr;
}


// substring(str, indexA, indexB) 
function mySubstring(str, indexA, indexB = str.length) {
  let newStr = '';

  if (indexA < 0 || !indexA) {
    indexA = 0;
  }

  if (indexB < 0 || !indexB) {
    indexB = 0;
  }

  if (indexA > str.length) {
    indexA = str.length;
  }

  if (indexB > str.length) {
    indexB = str.length;
  }

  for (let i = indexA; i < indexB; i++) {
    newStr += str[i];
  }

  return newStr;
}

