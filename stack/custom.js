class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class stack {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.first = null;
      this.next = null;
    }
    let temp = this.first;

    this.first = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}
const myStack = new stack(0);
myStack.push(1);
myStack.push(2);
myStack.pop();
console.log(myStack);
