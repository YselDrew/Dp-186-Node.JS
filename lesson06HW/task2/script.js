function meeting(rooms, neededAmountOfChairs) {
  if (!neededAmountOfChairs) {
    return 'Game On';
  }

  const occupants = rooms.map(item => item[0] = item[0].length);
  const amountOfChairsPerRoom = rooms.map(item => item[1]);
  const amountOfRooms = rooms.length;

  const freeChairsPerRoom = getFreeChairs(amountOfChairsPerRoom, occupants, amountOfRooms);

  const takenChairs = calcChairs(freeChairsPerRoom, neededAmountOfChairs);

  return takenChairs; 
}

function getFreeChairs(chairs, occupants, amountOfRooms) {
  const freeChairs = [];
  let amountOfFreeChairs;

  for (let i = 0; i < amountOfRooms; i++) {
    amountOfFreeChairs = chairs[i] - occupants[i];
    if (amountOfFreeChairs < 0) {
      amountOfFreeChairs = 0;
    }
    freeChairs.push(amountOfFreeChairs);
  }
  return freeChairs;
}

function calcChairs(freeChairs, neededChairs) {
  let chairs = 0;
  let amountOfChairs = [];

  freeChairs.forEach(freeChair => {
    if (chairs < neededChairs) {
      
      chairs += freeChair;
      amountOfChairs.push(freeChair);
    } 
  })

  if (chairs < neededChairs) {
    return 'Not Enough';
  } 

  // if (chairs > neededChairs) {
  //   return 'Too much'; // ?
  // }

  return amountOfChairs;
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)); //---> [0, 1, 3] 
console.log(meeting([['X', 3], ['XXXXX', 6], ['XX', 9], ['XX', 4]], 4)); //---> [0, 1, 1] 
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)); //---> [0, 0, 1, 2, 2]
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)); //---> 'Game On'
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXX', 4]], 10)) //---> 'Not Enough'

