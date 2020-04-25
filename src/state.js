class InitState {
  constructor(state) {
    this.state = {
      sizeOfTable: [],
      currentPosition: [],
      currentDirection: 0,
      responseText: '',
    };
  }
  set setState(input) {
    this.state = { ...this.state, input };
  }
}

let { state } = new InitState();

module.exports = { state };
