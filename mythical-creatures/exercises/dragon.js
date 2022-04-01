class Dragon {
  constructor(name, rider) {
      this.name = name;
      this.rider = rider;
      this.hungry = true;
      this.stomach = 0
  }

greet() {
  return "Hi, " + this.rider + "!";
}

eat() {
  this.stomach ++;
  if (this.stomach === 3) {
    this.hungry = false;
  };
}
}











module.exports = Dragon;
