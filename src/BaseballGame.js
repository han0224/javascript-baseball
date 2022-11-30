const { Random } = require("@woowacourse/mission-utils");
const BaseballNumber = require("./BaseballNumber");

// baseball 게임 관리 클래스
class BaseballGame {
  #userNumber;
  #computerNumber;
  constructor() {
    this.#userNumber = new BaseballNumber();
    this.#computerNumber = new BaseballNumber();
  }
  /**
   * 컴퓨터 숫자를 생성하는 메서드
   */
  setComputerNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(Random.pickNumberInRange(1, 9));
    }
    this.#computerNumber.setNumber(Array.from(computer));
  }

  /**
   * 사용자가 입력한 숫자와 컴퓨터가 입력한 숫자를 비교하는 함수
   * @return {Number[]}
   */
  compareUserAndComputer() {}

  /**
   * 숫자야구 게임 다시 시작하는 메서드
   */
  retry() {}
}
