class Node {
  constructor(value) {
    this.value = value;
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
  // When you pop() without updating this.tail, the tail property still points to the old last node object even though it’s no longer in the linked chain.

  // That happens because tail is just another reference stored in your LinkedList object, independent of the head → next chain.

  // To keep the list consistent, always reassign this.tail = prev so that tail points to the true last node after removal. ✅
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
      this.tail = null; //we dont need this.tail=null here because if we had only one elemnt in the array , then this.head = first.next; already points it to null
    }
    return first;
  }

  getFirst() {
    return this.head;
  }

  // getLast() {
  //   return this.tail||undefined;
  // }

  getLast() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    // while(temp.next){
    //   temp=temp.next
    // }
    // return temp;
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
      return this.unShift(value);
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
  print() {
    let values = [];
    let temp = this.head;
    while (temp) {
      values.push(temp.value);
      temp = temp.next;
    }
    console.log(values);
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
// myLinkedList.unShift(0);
// // console.log(myLinkedList.pop());
// // console.log(myLinkedList.shift());

// //console.log(myLinkedList.getLast());
// //console.log(myLinkedList.get(1));
// //console.log(myLinkedList.set(2, 4));
// //myLinkedList.insert(1, 4);
// //console.log(myLinkedList);
// // console.log(myLinkedList.get(2));
// // console.log(myLinkedList.size());
// myLinkedList.clear();
// console.log(myLinkedList.clear());

console.log(myLinkedList);
myLinkedList.reverse();
myLinkedList.print();
