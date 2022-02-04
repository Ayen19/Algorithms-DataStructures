class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.first == null) {
            this.first = node;
            this.last = this.first;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;
        return this, console.log(this);
    }

    dequeue() {
        if (this.length == 1) {
            // this.first = null; cannot read next of nul
            this.last = null;
        }
        // if (this.first === this.last) {
        //     this.last = null;}

        if (this.length == 0) {
            return null;
        }

        this.first = this.first.next;

        this.length--;
        return this, console.log(this);
    }
}

// const myQue = new Queue();
// myQue.enqueue(3);
// myQue.enqueue(4);
// myQue.enqueue(5);

// myQue.dequeue();
// myQue.dequeue();
// myQue.dequeue();

//impliment queues using stacks.

class StackA {
    constructor() {
        this.array = [];
    }

    peek() {
        return this[this.array.length - 1], console.log(this);
    }

    push(value) {
        this.array.push(value);
        return this, console.log(this);
    }
    pop() {
        this.array.pop();
        return this, console.log(this);
    }
    shift() {
        this.array.shift();
        return this, console.log(this);
    }
}

class QueueS {
    constructor() {
        this.array = new StackA();
    }

    peek() {
        this.array.peek();
    }
    enqueue(value) {
        this.array.push(value);
        // return this, console.log(this);
    }

    dequeue() {
        this.array.shift();
        // return this, console.log(this);
    }
}

const myQueueS = new QueueS();
myQueueS.peek();
myQueueS.enqueue(3);
myQueueS.enqueue(4);
myQueueS.enqueue(5);
myQueueS.dequeue();
myQueueS.dequeue();