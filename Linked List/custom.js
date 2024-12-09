class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop(value) {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unShift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let first = this.head;
    this.head = first.next;
    first.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return first;
  }

  getFirst() {
    return this.head;
  }

  // getLast() {
  //   return this.tail;
  // }

  getLast() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }
  get(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return null;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) {
      return this.unShift(index);
    }
    if (index === this.length) {
      return this.push(value);
    }

    let newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(0);
// myLinkedList.unShift(0);
// console.log(myLinkedList.pop());
// console.log(myLinkedList.shift());

//console.log(myLinkedList.getLast());
//console.log(myLinkedList.get(1));
//console.log(myLinkedList.set(2, 4));
//myLinkedList.insert(1, 4);
//console.log(myLinkedList);
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.size());
myLinkedList.clear();
console.log(myLinkedList.clear());

console.log(myLinkedList);
