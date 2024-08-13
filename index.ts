class MyTestClass {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, ${this.name}! How are you?`);
  }
}

function createInstance(name: string) {
  console.log(`Creating instance with name: ${name}`);

  return new MyTestClass(name);
}
