console.log("Ayen is on the move");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this, console.log(this);
  }

  prepend(value) {
    let newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    //why is this faulty>
    // this.head.next = this.head;
    // newNode.next = this.head;
    // this.head = newNode;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    let newNode = new Node(); // you have created an object using the class 'Node' . Remember the object has value:null and next:null, prev:null properties.
    newNode.value = value;
    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    // console.log("leader:", leader);
    // console.log("follower:", follower);
    newNode.next = follower;
    newNode.prev = leader;
    leader.next = newNode;
    follower.prev = newNode;
    //nb- does the order change anything?

    this.length++;
    // the object that once was follwer is now stroed as the newfollowers.next value.
    //creating the list, is all about making the links.

    return this;
  }

  remove(index) {
    if (index == 0) {
      let node = this.head;
      this.head = node.next;
      this.head.prev = null;
      this.length--;
      return this;
    }

    let preNode = this.traverseToIndex(index - 1);

    let node = preNode.next;
    let postNode = node.next;

    preNode.next = node.next;
    postNode.prev = node.prev;

    this.length--;

    return this;
  }

  reverse() {
    // let newHead = this.tail;
    // let newTail = this.head;
    // newHead.next = this.head.next;
    // newHead.prev = this.head.prev;
    // newTail.next = this.tail.next;
    // newTail.prev = this.tail.prev;

    let i = 0;
    let currentNode = this.tail.prev;
    let newNode = {
      value: this.tail,
      next: this.tail.prev,
      prev: this.head.prev,
    };

    while (currentNode.prev !== null) {
      let cnext = currentNode.next;
      let cprev = currentNode.prev;
      currentNode.next = cprev;
      currentNode.prev = cnext;
      this.append(currentNode);

      currentNode = currentNode.prev;
    }

    return this, console.log(this);
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
myLinkedList.prepend(1);
myLinkedList.insert(1, 73);

// myLinkedList.append(1);
// myLinkedList.prepend(99);
// myLinkedList.prepend(27);
// myLinkedList.printList();
// myLinkedList.insert(2, 55);
// myLinkedList.printList();
myLinkedList.remove(0);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList;
// myLinkedList.insert(2, 2);
