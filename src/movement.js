const { state } = require('./state');

const moveForward = () => {
  switch (state.currentDirection) {
    case 0:
      state.currentPosition[1]--;
      break;
    case 1:
      state.currentPosition[0]++;
      break;
    case 2:
      state.currentPosition[0]--;
      break;
    case 3:
      state.currentPosition[1]++;
      break;
  }
  state.responseText = 'you moved one step forward';
};

const moveBackwards = () => {
  switch (state.currentDirection) {
    case 0:
      state.currentPosition[1]++;
      break;
    case 1:
      state.currentPosition[0]--;
      break;
    case 2:
      state.currentPosition[0]++;
      break;
    case 3:
      state.currentPosition[1]--;
      break;
  }
  state.responseText = 'you moved one step backwards';
};

const rotateClockwise = () => {
  if (state.currentDirection < 3) {
    state.currentDirection++;
  } else {
    state.currentDirection = 0;
  }
  state.responseText = 'you rotated 90° clockwise';
};

const rotateCounterClockwise = () => {
  if (state.currentDirection > 0) {
    state.currentDirection--;
  } else {
    state.currentDirection = 3;
  }
  state.responseText = 'you rotated 90° counter clockwise';
};

module.exports = {
  moveForward,
  moveBackwards,
  rotateClockwise,
  rotateCounterClockwise,
};
