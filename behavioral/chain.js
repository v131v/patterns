class AbstractHandler {

  setNext(nextHandler) {
    this.nextHandler = nextHandler;
  }

  next(x) {

    if (this.nextHandler) return this.nextHandler.handle(x);
    return null;

  }

  handle(x) {
    throw new Error('method not defined');
  }

}

class NumberHandler extends AbstractHandler {

  handle(x) {

    if (typeof x !== 'number') return this.next(x);

    console.log(`Number ${x}`);

  }

}

class ArrayHandler extends AbstractHandler {

  handle(x) {

    if (!Array.isArray(x)) return this.next(x);

    console.log(`Array ${x.join(', ')}`);

  }

}

const data = [4, [1, 2, 3], 5];

const numHandler = new NumberHandler();
const arrHandler = new ArrayHandler();
numHandler.setNext(arrHandler);

data.forEach((x) => numHandler.handle(x));
