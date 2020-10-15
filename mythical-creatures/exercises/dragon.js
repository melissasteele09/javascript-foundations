class Dragon {
  constructor(name, rider, color,hungry) {
    this.name = name;
    this.rider = "Eragon";
    this.color = "blue";
    this.hungry = true;
    this.meals = 0;
  }

  eat() {
    this.meals ++;
    if(this.meals >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
