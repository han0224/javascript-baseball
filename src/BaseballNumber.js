const Vaild = require("./vaild");

class BaseballNumber {
  #number;
  setNumber(number) {
    this.#number = number.map(Number);
    Vaild.isBaseballNumber(this.#number);
  }

  getNumber() {
    return this.#number;
  }
}

module.exports = BaseballNumber;
