console.log("Ayen is on the move");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    //why is this faulty>
    // this.head.next = this.head;
    // newNode.next = this.head;
    // this.head = newNode;

    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    let newNode = new Node(); // you have created an object using the class 'Node' . Remember the object has value:null and next:null properties.
    newNode.value = value;
    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    // console.log("leader:", leader);
    // console.log("follower:", follower);
    leader.next = newNode;
    newNode.next = follower;

    this.length++;
    // the object that once was follwer is now stroed as the newfollowers.next value.
    //creating the list, is all about making the links.

    return this;
  }

  remove(index) {
    if (index == 0) {
      let node = this.head;
      this.head = node.next;
      return this;
    }

    let preNode = this.traverseToIndex(index - 1);

    let node = preNode.next;
    preNode.next = node.next;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }

  traverseToIndex(index) {
    // let counter = 0;
    let currentNode = this.head;
    // while (counter !== index) {
    //   currentNode = currentNode.next;
    //   counter++;}
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
    //  , console.log("I have traversed to :", index, ": ", currentNode)
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.append(1);
// myLinkedList.prepend(99);
// myLinkedList.prepend(27);
// myLinkedList.printList();
// myLinkedList.insert(2, 55);
// myLinkedList.printList();
// myLinkedList.remove(0);
// myLinkedList.printList();
console.log(myLinkedList);
// myLinkedList.insert(2, 2);
