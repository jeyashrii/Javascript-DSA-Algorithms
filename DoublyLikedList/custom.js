class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = temp.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
  unShift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  //Why return this;?
  //It allows method chaining.
  //list.unshift(20) → adds 20 at the start, returns the whole list object.
  //Since the method returns this (the list), you can immediately call .unshift(30) on it.
  //Then .push(40) can also be chained.
  //Without return this, you’d only get back the new node or nothing at all, and chaining like above would throw an error.
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      temp.next = null;
      this.head.prev = null;
    }
    this.length--;
    return temp;
  }
}
const List = new DoublyLinkedList(1);
List.push(2);
List.push(3);

//console.log(List.pop());
console.log(List);
