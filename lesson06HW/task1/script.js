function getClosestPoints(plane) {
  let minDistance = Infinity;
  let distance;

  let currentPoint;
  let nextPoint;

  let firstPoint; 
  let secondPoint;

  const points = plane.map(item => {
    return {
      x: item[0],
      y: item[1],
    }
  })

  for (let i = 0; i < points.length - 1; i++) {
    currentPoint = i;

    for (let j = i; j < points.length - 1; j++) {

      nextPoint = j + 1;

      distance = Math.abs(points[currentPoint].x - points[nextPoint].x) + Math.abs(points[currentPoint].y - points[nextPoint].y);

      if (distance < minDistance) {
        minDistance = distance;
        firstPoint = plane[currentPoint]; 
        secondPoint = plane[nextPoint];
      }
    }
  }

  return [firstPoint, secondPoint]
}

const plane = [
  [2,2], // A
  [2,8], // B
  [5,5], // C
  [6,3], // D
  [6,7], // E
  [7,4], // F
  [7,8], // G
];

console.log(getClosestPoints(plane));

