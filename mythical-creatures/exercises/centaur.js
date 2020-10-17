class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }

  shoot() {
    if(this.cranky === true || this.layingDown === true) {
      return "NO!"
    } else {
      this.cranky = true;
      return "Twang!!!"
    }
  }

  run() {
    if(this.cranky === true || this.layingDown === true) {
      return "NO!"
    } else {
      this.cranky = true;
      return "Clop clop clop clop!!!"
    }
  }

  sleep() {
    if(this.standing === true) {
      return "NO!"
    } else {
      this.cranky = false;
      return "ZZZZ";
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if(this.standing === true) {
      this.cranky = false;
    } else {
      return "Not while I\'m laying down!";
    }
  }
}

module.exports = Centaur;
