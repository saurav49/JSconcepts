const Singleton = (function () {
  let instance;

  const createInstance = () => {
    instance = new Object({ msg: "I am the instance" });
    return instance;
  };

  return {
    getInstance: () => {
      if (!instance) {
        return createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log("Instance : 1", instance1);
console.log("Instance : 2", instance2);
console.log("Instance equality", instance2 === instance1);

class Notification {
  constructor(msg, type) {
    if (!this) {
      throw Error("Cannot create new instance!!");
    }
    this.msg = msg;
    this.type = type;
  }

  getNotification = () => {
    msg: this.msg;
    type: this.type;
  };
}

const not1 = new Notification("hello", "success");
const not2 = new Notification("bye", "failure");

console.log(not1, not2);
