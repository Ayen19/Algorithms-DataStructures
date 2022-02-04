class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        const node = new Node();
    }

    peek() {
        return this.top, console.log(this.top);
    }
    push(value) {
        const node = new Node(value);
        if (this.length == 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const newnext = this.top;
            this.top = node;
            this.top.next = newnext;
        }

        this.length++;
        return this, console.log(this);
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const node = new Node();
        this.top = this.top.next;
        this.length--;
        return this;

        // this.top = this.next;
        // this.value = null;
        // this.lenth--;
    }
}

// const myStack = new Stack();
// myStack.push(2);
// myStack.push(22);
// myStack.push(99);
// myStack.peek();
// myStack.pop();
// myStack.peek();

//impliment stacks using arrays

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
}

const myStackA = new StackA();

myStackA.peek();
myStackA.push(2);
myStackA.push(3);
myStackA.pop();
myStackA.pop();