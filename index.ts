interface Request {
  nameOverride: string;
}

class MyTestClass {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHi({ nameOverride }: { nameOverride: string }): string {
    return `Hi, ${nameOverride ?? this.name}! XX`;
  }

  sayBye(): string {
    return `Bye, ${this.name}! XX`;
  }

  async sayHiAsync({ nameOverride }: Request): Promise<string> {
    return await Promise.resolve(`Hi, ${nameOverride ?? this.name}!`);
  }
}

function createInstance(name: string) {
  console.log(`Creating instance with name: ${name}`);

  return new MyTestClass(name);
}
