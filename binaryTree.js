class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;


    }
    insert(value) {
        const node = new Node(value);
        if (this.root == null) {
            this.root = node;
            return this, console.log(this);
        } else {
            let currentNode = this.root;
            while (true) {
                //left
                if (currentNode.value > value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this, console.log(this);
                    }
                    currentNode = currentNode.left;
                    //right
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this, console.log(this);
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;
        while (true) {
            if (!this.root) {
                return false, console.log("tree is empty");
            }
            if (currentNode.value === value) {
                return true, console.log("value exists", currentNode);
            }

            if (value > currentNode.value) {
                if (currentNode.right == null) {
                    return false, console.log("Value does not exist ");
                }
                currentNode = currentNode.right;
            } else {
                if (currentNode.left == null) {
                    return false, console.log("Value does not exist ");
                }
                currentNode = currentNode.left;
            }
        }
    }
}
const Btree = new BinaryTree();

// Btree.insert(2);
// Btree.insert(4);
// Btree.insert(8);
// Btree.insert(16);
Btree.lookup(2);