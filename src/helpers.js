const regex = /\d+, {0,}\d+/;

const validateInput = (input, array) => {
  if (regex.test(input)) {
    array.push(parseInt(input.split(",")[0]));
    array.push(parseInt(input.split(",")[1].trim()));
  }
};

const printResult = (currentPosition, sizeOfTable, rl) => {
  if (
    currentPosition[0] >= 0 &&
    currentPosition[0] <= sizeOfTable[0] &&
    currentPosition[1] >= 0 &&
    currentPosition[1] <= sizeOfTable[1]
  ) {
    console.log(currentPosition);
  } else {
    console.log([-1, -1]);
  }
  rl.close();
};

module.exports = { printResult, validateInput };
