class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (subsciber) => subsciber !== observer
    );
  }

  notify(data) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}

const observable = new Observable();

export default observable;
