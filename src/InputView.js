const { Console } = require("@woowacourse/mission-utils");
const { GAME_STATE_MESSAGE } = require("./Constants/Message");
const MakeBaseball = require("./MakeBaseball");

const InputView = {
  inputNumber(callback) {
    Console.readLine(GAME_STATE_MESSAGE.ENTER_NUMBER, (number) => {
      callback(MakeBaseball.userBaseball(number));
    });
  },
};
module.exports = InputView;
