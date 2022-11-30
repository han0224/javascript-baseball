const { ERROR_MESSAGE } = require("./Constants/Message");

const Vaild = {
  isBaseballNumber(number) {
    number.forEach((v) => {
      if (Number.isNaN(v)) throw ERROR_MESSAGE.NOT_NUMBER;
    });
    if (number.length !== 3) {
      throw ERROR_MESSAGE.NOT_THREE_LENGTH;
    }
    if (new Set(number).size !== 3) {
      throw ERROR_MESSAGE.NOT_DUPLICATED;
    }
    if (number.includes(0)) {
      throw ERROR_MESSAGE.NOT_ZERO;
    }
  },
};

module.exports = Vaild;
