function calculate(quipuExpression) {
  const quipuNumbers = quipuExpression.split(/\+|\*|\/|-/);
  const sign = quipuExpression.match(/\+|\*|\/|-/);

  const firstNumb = convertFromQuipu(quipuNumbers[0])
  const secNumb = convertFromQuipu(quipuNumbers[1])
  const result = calculateResult(sign[0], firstNumb, secNumb)
  const quipuResult = convertToQuipu(result);

  console.log(`${quipuExpression}=${quipuResult}`)
  return quipuResult;
}

function convertToQuipu(decNumber) {
  const decNumbsArr = decNumber.toString().split('');
  const quipuNumbsArr = [];

  decNumbsArr.forEach(decDigit => {
    if (decDigit === '0') {
      quipuNumbsArr.push('0'); // will be replaced with ''
    } else {
      const qDigit= '@'.repeat(decDigit);
      quipuNumbsArr.push(qDigit);
    }
  })

  const lastDigit = quipuNumbsArr[quipuNumbsArr.length - 1];

  if (lastDigit === '0') { 
    quipuNumbsArr.push('0');
  }

  const quipuNumber = quipuNumbsArr.join('~').replace(/0/g, '');
  return quipuNumber;
}

function convertFromQuipu(quipuNumb) {
  const quipuNumbsArr = quipuNumb.split('~');

  const lastDigit = quipuNumbsArr[quipuNumbsArr.length - 1]

  if (!lastDigit) { // if had zero at the end (['', ''])
    quipuNumbsArr.pop()
  }

  let strNumber = '';

  quipuNumbsArr.forEach(qDigit=> {
    strNumber += qDigit.length;
  })

  const decNumber = parseInt(strNumber);
  return decNumber;
}

function calculateResult(sign, numb1, numb2) {
  switch(sign) {
    case '+': return numb1 + numb2;
    case '-': return numb1 - numb2;
    case '/': return numb1 / numb2;
    case '*': return numb1 * numb2;
  }
}

calculate("@~@@*@@");
calculate("@~@@+@@~~");
calculate("@~~/@@");
calculate("@@@@@-@~~");

