function decodeMessage(message) {
  const wordsArr = getArrayOfWords(message);
  const secretSentences = getSecretSentences(wordsArr);

  const secretMessage = secretSentences.join(' ');

  return secretMessage;
}


function getArrayOfWords(message) {
  const sentences = message.split(/\? |\. |! /);
  const words = sentences.map(item => item.split(/, | |: /));

  return words;
}


function getSecretSentences(wordsArr) {
  const secretMessageArr = [];
  while (wordsArr.length > 0) {
    let key = getKey(wordsArr);
    let wordNumber;
    let sentenceNumber;

    const secretSentence = [];
    const decodedPart = key.length + 1;

    for (let i = 1; i <= key.length; i++) {
      sentenceNumber = i;
      wordNumber = key[i - 1];

      secretSentence.push(wordsArr[sentenceNumber][wordNumber]);
    }

    const secretSentenceStr = transformToString(secretSentence);
    secretMessageArr.push(secretSentenceStr);

    wordsArr = wordsArr.slice(decodedPart);
  } 
  return secretMessageArr;
}


function getKey(wordsArr) {
  const keySentence = wordsArr[0].map(item => item.replace(/'|"/g, ""));
  const key = keySentence.map(item => item.length - 1);

  return key;
}


function transformToString(arr) {
  const str = arr.join(' ').replace(/"/g, '');
  const strCapitalized = str.charAt(0).toUpperCase() + str.slice(1) + '.';

  return strCapitalized;
}


const message = 'Ye\'sterday, we "bumped" into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month? By the way, she still: has the ring I gave her! Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'

const message2 = 'Full he. Uncommonly surrounded considered hello him are its. It there is read good soon. My to. Did general dashwoods deficient man concluded additions resources. Or Kenobi packages overcame distance smallest in recurred.';

const message3 = 'Death weeks early. Hearted forbade on an for ye in fifteen. Age attended betrayed her the man raptures laughter. Instrument terminated of as Horde astonished literature motionless admiration. The affect. Are determine loktar how performed intention discourse but. On merits on so valley ogar indeed assure of. Has. Particular boisterous thromka uncommonly are.'

console.log(decodeMessage(message));
console.log(decodeMessage(message2));
console.log(decodeMessage(message3));

