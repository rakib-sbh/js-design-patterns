class ChatRoom {
  send(user, message) {
    const sender = user.getName();
    console.log(`${new Date().toLocaleString()} [${sender}] : [${message}]`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.send(this, message);
  }
}

const chatRoom = new ChatRoom();

const user1 = new User("Rakib Talukder", chatRoom);
user1.send("Hi Rakib");

const user2 = new User("Rupom", chatRoom);
user2.send("Hi Rupom");
