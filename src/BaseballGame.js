const { Random } = require("@woowacourse/mission-utils");
const BaseballNumber = require("./BaseballNumber");

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

  /**
   * 사용자가 입력한 숫자와 컴퓨터가 입력한 숫자를 비교하는 함수
   * @return {BaseballNumber}
   */
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

  /**
   * 숫자야구 게임 다시 시작하는 메서드
   */
  retry() {}
}
module.exports = BaseballGame;
