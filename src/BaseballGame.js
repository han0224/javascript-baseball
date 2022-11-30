const { Console } = require("@woowacourse/mission-utils");
const BaseballNumber = require("./BaseballNumber");
const { GAME_RESULT_MESSAGE } = require("./Constants/Message");

// baseball 게임 관리 클래스
class BaseballGame {
  #computerNumber;
  constructor() {
    this.#computerNumber = new BaseballNumber();
  }
  setComputerNumber(baseball) {
    console.log("setcomputernumber", baseball.getNumber());
    this.#computerNumber = baseball;
  }

  compareUserAndComputer(userBaseball) {
    console.log("user", userBaseball);
    console.log("computer", this.#computerNumber);
    const user = userBaseball.getNumber();
    const computer = this.#computerNumber.getNumber();
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (!user.includes(computer[i])) continue;
      if (user[i] === computer[i]) strike += 1;
      else ball += 1;
    }
    return { isEnd: strike === 3, result: [strike, ball, strike + ball] };
  }

  formatResult(result) {
    const print = [];
    if (result[1]) print.push(`${result[1]}${GAME_RESULT_MESSAGE.BALL}`);
    if (result[0]) print.push(`${result[0]}${GAME_RESULT_MESSAGE.STRIKE}`);
    if (print.length === 0) return GAME_RESULT_MESSAGE.NOTHING;
    return print.join(" ");
  }
}
module.exports = BaseballGame;
