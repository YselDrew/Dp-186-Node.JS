function decodeMessage(message) {
  let keyIndex = 0;

  const sentences = message.split(/\? |\. |! /);

  const splittedSenteces = sentences.map(item => {
    return item.split(/, | |: /);
  })

  const keySentence = splittedSenteces[keyIndex].map(item => {
    return item.replace(/'|"/g, "");
  })

  let key = keySentence.map(item => item.length - 1);
  let keyWord;

  const decodedMessage = [];

  for (let i = 1; i <= key.length; i++) {
    keyWord = splittedSenteces[i][key[i - 1]];
    decodedMessage.push(keyWord);
  }

  const decodedString = sentenceToString(decodedMessage);
  return decodedString;
}

function sentenceToString(arr) {
  const str = arr.join(' ').replace(/"/g, '');
  const strCapitalized = str.charAt(0).toUpperCase() + str.slice(1) + '.';
  return strCapitalized;
}

const message = 'Ye\'sterday, we "bumped" into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month? By the way, she still: has the ring I gave her! Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';

console.log(decodeMessage(message));

