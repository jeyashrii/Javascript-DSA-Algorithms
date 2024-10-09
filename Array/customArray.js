class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  //   deleteByIndex(index) {
  //     delete this.data[index];

  //     for (let i = 0; i < this.length; i++) {
  //       this.data[i] = this.data[i + 1];
  //     }
  //     delete this.data[this.length - 1];
  //     this.length--;
  //   }
  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const Array1 = new myArray();
Array1.push("a");
Array1.push("b");
Array1.push("c");
//console.log(Array1.push(2));
//console.log(Array1.get(1));

//console.log(Array1.pop());
console.log(Array1);
// console.log(Array1.shift());
// console.log(Array1);
console.log(Array1.deleteByIndex(0));
console.log(Array1);
