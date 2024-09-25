class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function placeOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    console.log(`Your have successfully placed an ${order} which id is ${id}`);
  });
}

function trackOrderCommand(id) {
  return new Command(() => {
    console.log(`Your order with id ${id} will be arrive at most 20 minute`);
  });
}

function cancelOrderCommand(id) {
  return new Command((orders) => {
    const index = orders.indexOf(id);

    if (index !== -1) {
      orders.splice(index, 1);
      console.log(`You have canceled your order ${id}`);
    } else {
      console.log(`Failed to cancel your order ${id}`);
    }
  });
}

const orderManager = new OrderManager();
orderManager.execute(new placeOrderCommand("T Shirt", "1234"));
orderManager.execute(new trackOrderCommand("1234"));
orderManager.execute(new cancelOrderCommand("1234"));

orderManager.execute(new placeOrderCommand("Mercedes", "2345"));
console.log(orderManager.orders);
