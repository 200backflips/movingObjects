const readline = require("readline");
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const { moveForward, moveBackwards } = require("./movement");
const { validateInput, printResult } = require("./helpers");
const {
  inputSize,
  inputStartingPosition,
  inputMovements,
} = require("./inputText");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sizeOfTable = [];
const currentPosition = [];
let currentDirection = 0;
let responseText = "";
let TableSizeError = "";
let startingPointError = "";

const recursiveReadline = () => {
  clear();
  console.log(
    chalk.cyanBright(
      figlet.textSync("moving\nobjects\n", { horizontalLayout: "full" })
    )
  );
  if (sizeOfTable.length < 2) {
    inputSize(TableSizeError);
    rl.question("  answer: ", (input) => {
      validateInput(input, sizeOfTable);
      TableSizeError = "something went wrong, please try again.";
      recursiveReadline();
    });
  } else if (currentPosition.length < 2) {
    inputStartingPosition(startingPointError);
    rl.question("  answer: ", (input) => {
      validateInput(input, currentPosition);
      startingPointError = "something went wrong, please try again.";
      recursiveReadline();
    });
  } else {
    inputMovements(responseText);
    rl.question("  answer: ", (input) => {
      switch (+input) {
        case 0:
          printResult(currentPosition, sizeOfTable, rl);
          break;
        case 1:
          moveForward(currentDirection, currentPosition);
          responseText = "you moved one step forward";
          recursiveReadline();
          break;
        case 2:
          moveBackwards(currentDirection, currentPosition);
          responseText = "you moved one step backwards";
          recursiveReadline();
          break;
        case 3:
          if (currentDirection < 3) {
            currentDirection++;
          } else {
            currentDirection = 0;
          }
          responseText = "you rotated 90° clockwise";
          recursiveReadline();
          break;
        case 4:
          if (currentDirection > 0) {
            currentDirection--;
          } else {
            currentDirection = 3;
          }
          responseText = "you rotated 90° counter clockwise";
          recursiveReadline();
          break;
        default:
          responseText = "please enter a number between 0-4";
          recursiveReadline();
          break;
      }
    });
  }
};

rl.on("close", () => process.exit(0));

recursiveReadline();
