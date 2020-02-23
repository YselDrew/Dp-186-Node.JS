function checkWinner(board) {
  if (checkIfGameContinues(board)){
    return -1;
  }

  const rowsCombinations = calcCombs(board);

  const transBoard = transposeArray(board);
  const colsCombinations = calcCombs(transBoard);

  const diagonals = getDiagonals(board);

  const combinations = diagonals.concat(rowsCombinations, colsCombinations);

  const winner = getWinner(combinations);

  return winner;
}

function getWinner(combs) {
  const winnerX = '111';
  const winnerO = '222';

  for (let i = 0; i < combs.length; i++) {
    if (combs[i] === winnerX) {
      return 1;
    } else if (combs[i] === winnerO) {
      return 2;
    } 
  }
  return 0;
}

function checkIfGameContinues(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[i][j]) {
        return true;
      }
    }
  }
  return false;
}

function calcCombs(arr) {
  const combs = [];
  arr.forEach(row => {
    const strRow = row.join('');
    combs.push(strRow);
  })

  return combs;
}

function transposeArray(arr) {
  return arr[0].map((col, i) => arr.map(row => row[i]));
}

function getDiagonals(arr) {
  let diagonal = '';
  let antiDiagonal = '';

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        diagonal += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        antiDiagonal += arr[i][j];
      }
    }
  }

  return [
    diagonal, antiDiagonal
  ];
}

const board = [
  [2, 1, 1],
  [1, 1, 2],
  [1, 2, 1]
];

console.log(checkWinner(board));

