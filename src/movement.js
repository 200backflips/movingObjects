const moveForward = (currentDirection, currentPosition) => {
  switch (currentDirection) {
    case 0:
      currentPosition[1] = currentPosition[1] - 1;
      break;
    case 1:
      currentPosition[0] = currentPosition[0] + 1;
      break;
    case 2:
      currentPosition[0] = currentPosition[0] - 1;
      break;
    case 3:
      currentPosition[1] = currentPosition[1] + 1;
      break;
  }
};

const moveBackwards = (currentDirection, currentPosition) => {
  switch (currentDirection) {
    case 0:
      currentPosition[1] = currentPosition[1] + 1;
      break;
    case 1:
      currentPosition[0] = currentPosition[0] - 1;
      break;
    case 2:
      currentPosition[0] = currentPosition[0] + 1;
      break;
    case 3:
      currentPosition[1] = currentPosition[1] - 1;
      break;
  }
};

module.exports = {
  moveForward,
  moveBackwards,
};
