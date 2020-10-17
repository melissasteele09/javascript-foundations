class Medusa {
  constructor(medusa) {
    this.name = medusa.name;
    this.statues = [];
  }

  stare(person) {
    this.statues.push(person)
    person.stoned = true;
    if(this.statues.length > 3) {
      var freed = this.statues.shift()
      freed.stoned = false
    }
  }
}

module.exports = Medusa;
