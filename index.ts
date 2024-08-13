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
  return new MyTestClass(name);
}
