## Abstract 
A tree is a data structure that consists of a root node at the top of a hierarchical structure containing its  children nodes. Each node contains data and the connection between one node and another is referred to as an edge . The end points of a tree data structure are referred to as leaves and these are nodes that have no children. In a binary tree, each node has a maximum of 2 child nodes-right and left. 
Tree traversal , also referred to as tree search, is the process of going through the nodes of a tree exactly once and performing CRUD functionality as you go through. 
We classify tree traversal based on the order in which you go through the nodes. 2 major categories of tree traversal are Breadth first search and depth first search .
Depth first search further has 3 variants: in-order, pre-order and post order traversal. 
In this paper, we will create a binary tree data structure, and code the different types of traversal algorithms, using the Javascript language.  
 We will then take a look at a use of tree structure traversal algorithm  in a decision tree /classification tree  example in machine learning.

## Introduction 

Trees are a type of graph data structure. 
They resemble the shape of an upside down tree in that each vertix is connected to a lower vertex via an edge. 
But why are tree data structures valuable to us? 
Firstly, they are able to effectively model relationships between things  and behaviours in real life. Looking at nature alone, we see the tree data structure in plants roots and branches, in rivers flowing down a mountain to the ocean, in the capillaries veins and arteries that carry blood in out body, in the nuerons in our brain, in the structure of our families- ie a family tree, in the way we organize leadership in our institutions, the way we organize our businesses, etc. 
The oldest known use of treedata structures was in 1857 by Arthur Cayley who used trees to find solutions for different isomers of a hydrocarbon. 
We use tree data structures in everyday things that we do: seaeching through files in our computer, compiling a program where the assembler , using google maps to find the shortes path, palying a chess game with the computer. 
All these use trees, all these require movign from node to node in the tree and perfoming certain action. 
There are many types of trees, all differing by their rules, however the basics of the tree data structure applies to them all. 

## The tree data Sturcture: 

A data structure can be defined as a tree if it is undirected and contains no  simple circuit. 

The vertexes in a tree structure are referred to as nodes, and each nodes carries data information about itself and about its child nodes. 
In a tree data structure, the parent carries information about its child node, but not viceversa. 

implementation of a tree node with two children 
~~~js 
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
~~~


There are many types of trees but they all share certain properties. 
Trees have certain properties
We say a tree is a rooted tree when it has a single node designated as the root and every other node  is directed away from it
- A tree with n vertices has n-1 edges.  
- the upper bound for leaves in a tree is m ^h
- levels are the length of path from the root node of a tree to that vertex. The height of the tree is the maximum level of the structure. 
  
  ## Binary tree

Lets look at the case where a tree is Binary 
A binary tree is defined by two characteristics. Its number of children and its insertion order. 

We then construct the Binary tree data class, each tree object is constructed with a rootnode with a value null. 
 The very first node inserted in a tree becomes the tree's root node. 

~~~ js 
class BinaryTree {
    constructor() {
        this.root = null;
    } 
~~~

The order of insertion in a binary tree is so that the right child is always the one greater than its parent node, while the left child is always less thn its parent nodes. 

To insert a new value to a tree,  A new node object is created with its data value given in the insert method's parameter. The tree is traversed to find a place to put the new node.
The first node added becomes the root. 
In the insertion method, we code it so that additional values greater than a node are placed to its right, and additonal values less than the node are placed to its left. It is this that gives the binary search tree its order. 


~~~js
    insert(value) {
        const node = new Node(value);
        if (this.root == null) {
            this.root = node;
            return this;
        } else {
            let currentNode = this.root;
            while (true) {
                //left
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                    //right
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
~~~

### Performance of tree data strutures(Big O )
....
### Balanced and Unbalanced trees: 
...

## Traversals : 
Traversal is defined as the action of visiting each and every node in a tree/ graph type data structure,one by one. 
We would need to traverse a tree in order to perform  any type of CRUD(createm read,update, delete) functionality across a tree data structure. 

The time complexity for traversals is O[n], since each input in the tree is processed. 

There are two main types of traversal algorithms. 
1. Breath First traversal
2. Depth First trraversal: classified further into preorder, inorder and post order. 

We choose the type of traversal to use based on the situation. For example BFS, its good for finding the shortest path as it searches closest nodes first and where memory would not be an issue( since BFS uses additional memory)

Depth first search is great for finding nodes that you know are at lower levels. It also good for checking if a certain path from a source node to a target node exists. It uses less memory, however can get slow if the root is deep. 
 
### Pros and cons of the Breadth first and depth first traversals: 
- They both havee the same time complexity O(n). 
- In BFS, is good for finding the shortest path as it searches closest nodes first,  however it requires more memory.
- Depth first search is great for finding nodes that you know are at lower levels. It also good for checking if a certain path from a source node to a target node exists. It uses less memory , however can get slow if the root is deep. 




## Breadth First Search. 

In breadth first search, the tree is traversed level by level, touching each node in one level before going on to the next lower level. 
In order to go to the next level, the tree has to carry information about the child nodes of each node  it traverses on a certain level. - this means that additional memory is used for the algorithm. 
The information about each nodes, and its children, is stored in a queues type array. 
The concept of a Queue. 
Just like in a supermarket line ,is that in  a queue arrangement  the first object in is the first object out/ The first data value in , is the fist to be processed. 
The algorithm first adds the root node to the queue,  then processes the node into the list and in the same iteration, adds the children of the rootnode into the queue., then continues to the next iteration to perform the same operations on the next node in the list.  
The complete iteration of the  method outputs a list that contains the items traversed in a breath First manner.
Note that since there is a pattern of operation, we can use recurrence to perform the operations. We will demonstrate this however on the next traversal types. 


~~~ js 
BreadthFirstSearch() {
            let currentNode = this.root;
            let list = [];
            let queue = [];
            queue.push(currentNode);

            while (queue.length > 0) {
                currentNode = queue.shift();
                list.push(currentNode.value);
                if (currentNode.left) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }
            return list;
        }

~~~


## Depth First Traversal

In depth first traversal, the algorithm traverses through the tree downwards, following a path from parent to children until it reaches leaf nodes. 
The algorithm then iterates the downward traversal on the next  branch in the tree is closest to the leaf nodes. . It continues this way until it reaches the first branch in the tree, them repeats the process again with the right subtree

The differences between preorder inorder and post order on a basic level is the order of  traversal, and thus the output arrangement in any particular subtree. 

preorder : parent, right child subtree , left child 

inorder: leftchild, parent , right child 

post order : left child , right child , parent. 


The function for pre order is created and used recursively to traverse the entire lenght of the tree.

## The use of stacks 
A stack data structure is such that the last item in is the  first item out. 
The stack array allows the algorithm to process the right subtree to its full depth before proceeding to the left subtree. 




~~~js 

depthFirstSearch() {

            let currentNode = this.root;
            let list = [];
            let stack = [];
            stack.push(currentNode);

            while (stack.length > 0) {
                currentNode = stack.pop();
                list.push(currentNode.value);
                if (currentNode.left) {
                    stack.push(currentNode.left);
                }
                if (currentNode.right) {
                    stack.push(currentNode.right);
                }
            }
            return list;
        }

~~~



Since the process of traversing the subtrees is recursive, it makes sense to use a reccursive function in the algorithm, as coded below.
Notice that the only difference between inorder, pre order and post order is the point in which the node value is pushed to the output list.

In recursive functions, the function calls itself succesively, storing each call in the call stack. Eventually it reaches a return condition and begins popping the stuck from the last item in. 


## Pre order: 

~~~ js
function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}
~~~


~~~js 
DFTPreOrder(currentNode, list) {
        return traversePreOrder(this.root, []);
    }
~~~


As stated earlier,the only difference between preorder, inorder and postorder, is the position in which the data value is pushed into the list. There we just need to modify where we put the list.push statement in the code above. 


## Looking forward : 
 The use of a decision tree in medical diagnosis- machine learning.



