const readline = require('readline');
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const {
  inputSize,
  inputStartingPosition,
  inputMovements,
} = require('./inputText');
const { validateInput, printResult } = require('./helpers');
const {
  moveForward,
  moveBackwards,
  rotateClockwise,
  rotateCounterClockwise,
} = require('./movement');
const { state } = require('./state');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(recursiveReadline = () => {
  clear();
  console.log(
    chalk.cyanBright(
      figlet.textSync('moving\nobjects\n', { horizontalLayout: 'full' })
    )
  );
  console.log(state);
  if (state.sizeOfTable.length < 2) {
    inputSize();
    rl.question('  answer: ', (input) => {
      validateInput(input, state.sizeOfTable);
      recursiveReadline();
    });
  } else if (state.currentPosition.length < 2) {
    inputStartingPosition();
    rl.question('  answer: ', (input) => {
      validateInput(input, state.currentPosition);
      recursiveReadline();
    });
  } else {
    inputMovements();
    rl.question('  answer: ', (input) => {
      switch (+input) {
        case 0:
          printResult();
          rl.close();
          break;
        case 1:
          moveForward();
          recursiveReadline();
          break;
        case 2:
          moveBackwards();
          recursiveReadline();
          break;
        case 3:
          rotateClockwise();
          recursiveReadline();
          break;
        case 4:
          rotateCounterClockwise();
          recursiveReadline();
          break;
        default:
          state.responseText = 'please enter a number between 0-4';
          recursiveReadline();
          break;
      }
    });
  }
})();

rl.on('close', () => process.exit(0));
