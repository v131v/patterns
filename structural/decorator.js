class AbstractSerializer {

  serialize(object) {
    throw new Error('method not defined');
  }

}

class ConcreteSerializer extends AbstractSerializer {

  serialize(object) {
    console.log(JSON.stringify(object));
  }

}

class LoggerDecorator extends AbstractSerializer {

  constructor(abstractSerializer) {

    super();
    this.abstractSerializer = abstractSerializer;

  }

  serialize(object) {

    console.log(`Serialize object`);
    this.abstractSerializer.serialize(object);

  }

}

const jsonSerializer = new ConcreteSerializer();
const jsonSerializerWithLogger = new LoggerDecorator(jsonSerializer);
const object = { name: 'object for serialization' };

console.log('Without decorator:');
jsonSerializer.serialize(object);

console.log('With decorator:');
jsonSerializerWithLogger.serialize(object);
