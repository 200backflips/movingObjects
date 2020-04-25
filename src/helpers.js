const { state } = require('./state');
const regex = /\d+, {0,}\d+/;

const validateInput = (input, array) => {
  if (regex.test(input)) {
    array.push(parseInt(input.split(',')[0]));
    array.push(parseInt(input.split(',')[1].trim()));
    state.responseText = '';
  } else {
    state.responseText = 'something went wrong, please try again.';
  }
};

const printResult = () => {
  if (
    state.currentPosition[0] >= 0 &&
    state.currentPosition[0] <= state.sizeOfTable[0] &&
    state.currentPosition[1] >= 0 &&
    state.currentPosition[1] <= state.sizeOfTable[1]
  ) {
    console.log(state.currentPosition);
  } else {
    console.log([-1, -1]);
  }
};

module.exports = { printResult, validateInput };
