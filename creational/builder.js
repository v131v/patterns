class ProxyObject {

  constructor() {

    this.host = null;
    this.port = null;
    this.username = null;
    this.password = null;

  }

  serialize() {

    let result = `${this.host}:${this.port}`;
    result += (
      this.username && this.password
      ? `@${this.username}:${this.password}`
      : ''
    );
    return result;

  }

}

class AbstractBuilder {

  getResult() {
    throw new Error('method not defined');
  }

  setHost(host) {
    throw new Error('method not defined');
  }

  setPort(port) {
    throw new Error('method not defined');
  }

  setAuth({ username, password }) {
    throw new Error('method not defined');
  }

}

class ConcreteBuilderWithAuth extends AbstractBuilder {

  constructor() {
    
    super();
    this.proxy = new ProxyObject();

  }

  getResult() {
    return this.proxy;
  }

  setHost(host) {
    this.proxy.host = host;
  }

  setPort(port) {
    this.proxy.port = port;
  }

  setAuth({ username, password }) {

    this.proxy.username = username;
    this.proxy.password = password;

  }

}

class ConcreteBuilder extends AbstractBuilder {

  constructor() {

    super();
    this.proxy = new ProxyObject();

  }

  getResult() {
    return this.proxy;
  }

  setHost(host) {
    this.proxy.host = host;
  }

  setPort(port) {
    this.proxy.port = port;
  }

  setAuth({ username, password }) {}

}

class Director {

  build(abstractBuilder, [host, port, username, password]) {

    abstractBuilder.setHost(host);
    abstractBuilder.setPort(port);
    abstractBuilder.setAuth({ username, password });

    return abstractBuilder.getResult();

  }

}

const proxies = [
  ['1.1.1.1', 80],
  ['1.2.3.4', 8000, 'admin', 'admin123'],
  ['localhost', 3000, 'user1', 'qwerty123'],
];

const director = new Director();

const builderWithAuth = new ConcreteBuilderWithAuth();
const builderWithoutAuth = new ConcreteBuilder();

proxies.forEach((proxyData) => {

  const proxyWithAuth = director.build(builderWithAuth, proxyData);
  const proxyWithoutAuth = director.build(builderWithoutAuth, proxyData);

  console.log(proxyWithAuth.serialize());
  console.log(proxyWithoutAuth.serialize());
  console.log('');

});
