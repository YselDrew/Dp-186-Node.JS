function damagedOrSunk(board, attacks) {
  const ships = getShipsLocation(board);
  
  const convertedAttacks = attacks.map(numberOfAttack => 
      (board.length - numberOfAttack[1]) * 6 + (numberOfAttack[0] - 1)
  );

  for (let attackCoord of convertedAttacks) {
    for (let ship in ships) {
      const currentShip = ships[ship];

      currentShip.forEach((coord, index) => {
        if (attackCoord === coord) {
          currentShip[index] = -1;
        }
      })
    }
  }

  const result = calcResults(ships);
  return result;
}

function getShipsLocation(board) {
  const ships = {};

  const coords = [].concat(...board);
  const maxShipNumber = Math.max(...coords);

  let shipNumber = 1;
  while (shipNumber <= maxShipNumber) {
    let shipCoords = [];
    for (let i = 0; i < coords.length; i++) {
      if (coords[i] === shipNumber) {
        shipCoords.push(i);
      }
    }
    ships[`Ship #${shipNumber}`] = shipCoords;
    shipNumber++;
  }
  return ships;
}

function calcResults(ships) {
  let damaged = 0;
  let sunk = 0;
  let notTouched = 0;
  let points = 0;

  for (let ship in ships) {
    const currentShip = ships[ship];

    if(currentShip.includes(-1)) {
      const isSunk = Math.max(...currentShip) < 0;
      if (isSunk) {
        sunk++;
        points += 1;
        continue;
      } 
      currentShip.forEach(coord => {
        if (coord < 0) {
          damaged++;
          points += 0.5;
        }
      })
    } else {
      notTouched++;
      points -= 1;
    }
  }

  if (points < 0) {
    points = 0;
  }

  return { 
    sunk,
    damaged,
    notTouched,
    points 
  }
}

const board = [
  [0,0,0,2,2,0],
  [0,3,0,0,0,0],
  [0,3,0,1,0,0],
  [0,3,0,1,0,0]
];

const attacks = [[2, 1], [1, 3], [4, 2], [4, 1]];

damagedOrSunk(board, attacks);

