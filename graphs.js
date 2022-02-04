class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        return this, console.log(this);
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return this, console.log(this);
    }

    showConnections() {}
}

const AdjListGraph = new Graph();
AdjListGraph.addVertex(2);
AdjListGraph.addVertex(9);
AdjListGraph.addVertex(22);
AdjListGraph.addEdge(2, 22);