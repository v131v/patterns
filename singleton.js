class Singleton1 {

  static getInstance() {
    this.instance ??= new Singleton();
    return this.instance;
  }

  constructor() {
    this.x = 5;
  }

  printNext() {
    console.log(++this.x);
  }

}

class Singleton2 {

  constructor() {
    if (Singleton2.instance) return Singleton2.instance;
    Singleton2.instance = this;

    this.x = 5;
    return this;
  }

  printNext() {
    console.log(++this.x);
  }

}

const s1 = Singleton1.getInstance();
const s2 = Singleton1.getInstance();
s1.printNext(); // 6
s2.printNext(); // 7

const s3 = new Singleton2();
const s4 = new Singleton2();
s3.printNext(); // 6
s4.printNext(); // 7
