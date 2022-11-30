const MissionUtils = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");
const {
  GAME_STATE_MESSAGE,
  GAME_RESULT_MESSAGE,
  ERROR_MESSAGE,
} = require("./Constants/Message");
const InputView = require("./InputView");
const MakeBaseball = require("./MakeBaseball");
const runGenerator = require("./RunGenerator");

class App {
  #game;
  constructor() {
    this.#game = new BaseballGame();
  }

  play() {
    MissionUtils.Console.print(GAME_STATE_MESSAGE.START);
    runGenerator(this.run.bind(this));
  }
  *run() {
    this.#game.setComputerNumber(MakeBaseball.computerBaseball());
    while (true) {
      const ball = yield InputView.inputNumber;
      const result = this.#game.compareUserAndComputer(ball);
      if (result.isEnd) break;
    }
    console.log("ENDEND");
    runGenerator(this.isReStart.bind(this));
  }
  *isReStart() {
    const command = yield InputView.inputRetry;
    console.log(command, typeof command);
    if (command !== 1 && command !== 2) throw ERROR_MESSAGE.ONLY_ONE_TWO;
    if (command === 1) runGenerator(this.run.bind(this));
    if (command === 2) {
      console.log("end");
    }
  }
}

module.exports = App;

const app = new App();
app.play();
