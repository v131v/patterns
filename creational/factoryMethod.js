class Product {

  printValue() {
    throw new Error('method not defined');
  }

} 

class Factory {

  factoryMethod() {
    throw new Error('method not defined');
  }

}

class ConcreteProductA extends Product {

  constructor() {
    super();
    this.x = Math.floor(Math.random() * 10);
  }

  printValue() {
    console.log(`Value of product A: ${this.x}`);
  }

}

class ConcreteFactoryA extends Factory {

  factoryMethod() {
    return new ConcreteProductA();
  }

}

class ConcreteProductB extends Product {

  constructor() {
    super();
    this.x = -Math.floor(Math.random() * 10);
  }

  printValue() {
    console.log(`Value of product B: ${this.x}`);
  }

}

class ConcreteFactoryB extends Factory {

  factoryMethod() {
    return new ConcreteProductB();
  }

}

function showProductValues(factory) {

  new Array(3)
    .fill(null)
    .map(() => factory.factoryMethod())
    .forEach((product) => product.printValue());

}

const factoryA = new ConcreteFactoryA();
const factoryB = new ConcreteFactoryB();

showProductValues(factoryA);
showProductValues(factoryB);
