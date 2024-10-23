import { makeAutoObservable } from "mobx";

class CounterV1 {
  counter: {
    count: number;
    updatedAt: Date;
  } = {
    count: 0,
    updatedAt: new Date(),
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  increment() {
    this.counter.count++;
    this.counter.updatedAt = new Date();
  }

  decrement() {
    this.counter.count--;
    this.counter.updatedAt = new Date();
  }

  get mul5() {
    return {
      count: this.counter.count * 5,
      updatedAt: this.counter.updatedAt,
    };
  }
}

class CounterV2 {
  counter = {
    count: 0,
    updatedAt: new Date(),
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  increment() {
    this.counter = {
      count: this.counter.count + 1,
      updatedAt: new Date(),
    };
  }

  decrement() {
    this.counter = {
      count: this.counter.count - 1,
      updatedAt: new Date(),
    };
  }
}

const counterV1 = new CounterV1();
const counterV2 = new CounterV2();

export { counterV1, counterV2 };
