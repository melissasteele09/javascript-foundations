class Magician {
  constructor(magician) {
    this.name = magician.name;
    this.topHat;
    if(magician.topHat === false) {
      this.topHat = false;
    } else {
      this.topHat = true;
    }
    this.confident = false;
    this.spells = 0
  }

  incantation(chant) {
    return `${chant.toUpperCase()}!`;
  }

  cast() {
    this.spells ++;
    if (this.spells >= 3) {
      this.confident = true;
    }
    if(this.topHat === true) {
      return "PULL RABBIT FROM TOP HAT"
    } else {
      return "PULL DOVE FROM SLEEVE"
    }
  }

  performShowStopper() {
    if(this.spells < 3) {
      return "Oh no! Practice more before attempting this trick!"
    } else {
      return "WOW! The magician totally just sawed that person in half!"
    }
  }
}

module.exports = Magician;
