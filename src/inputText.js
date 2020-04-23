const chalk = require("chalk");

const inputSize = (errorMessage) => {
  console.log(`
  welcome to moving objects, please specify
  the size of the table. input the width,
  separated by a comma followed by the height,
  like so: "1, 2".\n
  ${chalk.cyanBright(errorMessage)}
  `);
};

const inputStartingPosition = (errorMessage) => {
  console.log(`
  thank you. please input your starting
  position in the same manner,
  for example: "1, 2"\n
  ${chalk.cyanBright(errorMessage)}
  `);
};

const inputMovements = (responseText) => {
  console.log(`
  to move, choose one of the following options\n
  [1] move forward one step
  [2] move backwards one step
  [3] rotate 90° clockwise
  [4] rotate 90° counter clockwise
  [0] quit the simulation and print the result\n
  ${chalk.cyanBright(responseText)}
  `);
};

module.exports = { inputSize, inputStartingPosition, inputMovements };
