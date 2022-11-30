const BaseballNumber = require("./BaseballNumber");
const { Random } = require("@woowacourse/mission-utils");

const MakeBaseball = {
  userBaseball(number) {
    const baseball = new BaseballNumber();
    baseball.setNumber(number.split("").map(Number));
    return baseball;
  },
  computerBaseball() {
    const baseball = new BaseballNumber();
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(Random.pickNumberInRange(1, 9));
    }
    baseball.setNumber(Array.from(computer));
    return baseball;
  },
};

module.exports = MakeBaseball;
