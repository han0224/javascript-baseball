const BaseballNumber = require("./BaseballNumber");

const MakeBaseball = {
  userBaseball(number) {
    const baseball = new BaseballNumber();
    console.log(number.split("").map(Number));
    baseball.setNumber(number.split("").map(Number));
    console.log("userbaseball", baseball);
    return baseball;
  },
  computerBaseball() {
    const baseball = new BaseballNumber();
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(Random.pickNumberInRange(1, 9));
    }
    return baseball.setNumber(Array.from(computer));
  },
};

module.exports = MakeBaseball;
