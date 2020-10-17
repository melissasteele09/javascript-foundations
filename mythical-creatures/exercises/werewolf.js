class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false
    this.hungry = false
  }

  transform() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }

  eat(victim) {
    if(this.hungry === true && this.human === false) {
      victim.eaten = true;
      this.transform();
    } else {
      return "I'd never eat another human!";
    }
  }
}


module.exports = Werewolf;
