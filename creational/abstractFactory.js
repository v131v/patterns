// Button

class AbstractButton {

  click() {
    throw new Error('method not defined');
  }

}

class ConcreteButtonA extends AbstractButton {

  constructor() {
    super();
  }

  click() {
    console.log(`Button A was clicked`);
  }

}

class ConcreteButtonB extends AbstractButton {

  constructor() {
    super();
  }

  click() {
    console.log(`Button B was clicked`);
  }

}

// Text

class AbstractText {

  print() {
    throw new Error('method not defined');
  }

}

class ConcreteTextA extends AbstractText {

  constructor() {
    super();
    this.text = 'a_text';
  }

  print() {
    console.log(`Print A-text: ${this.text}`);
  }

}

class ConcreteTextB extends AbstractText {

  constructor() {
    super();
    this.text = 'b_text';
  }

  print() {
    console.log(`Print B-text: ${this.text}`);
  }

}

// Factory 

class AbstractFactory {

  factoryMethodButton() {
    throw new Error('method not defined');
  }

  factoryMethodText() {
    throw new Error('method not defined');
  }

}

class ConcreteFactoryA extends AbstractFactory {

  factoryMethodButton() {
    return new ConcreteButtonA();
  }

  factoryMethodText() {
    return new ConcreteTextA();
  }

}

class ConcreteFactoryB extends AbstractFactory {

  factoryMethodButton() {
    return new ConcreteButtonB();
  }

  factoryMethodText() {
    return new ConcreteTextB();
  }

}

function clickAllButtoonsAndPrintAllTexts(abstractFactory) {

  new Array(3)
    .fill(null)
    .map(() => ({
      button: abstractFactory.factoryMethodButton(),
      text: abstractFactory.factoryMethodText(),
    }))
    .forEach(({ button, text }, i) => {

      console.log(`> Button and text number ${i + 1}`);
      text.print();
      button.click();
      console.log('');

    });

}

const factoryA = new ConcreteFactoryA();
const factoryB = new ConcreteFactoryB();

console.log('==== A buttons and texts: ====');
clickAllButtoonsAndPrintAllTexts(factoryA);

console.log('==== B buttons and texts ====');
clickAllButtoonsAndPrintAllTexts(factoryB);
