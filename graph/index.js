class Graph {
  constructor() {
    this.node = [];
    this.edgeList = new Map();
  }
  addNode(node) {
    this.node.push(node);
    this.edgeList.set(node, []);
  }
  addEdge(v, w) {
    this.edgeList.get(v).push(w);
    this.edgeList.get(w).push(v);
  }

  printGraph() {
    console.log(this.edgeList);
  }

  initColor() {
    let color = [];
    for (let i = o; i <= this.node.length; i++) {
      color[this.node[i]] = 'white';
    }
    return color;
  }

  bfs(v, callback) {
    let color = this.initColor();

    let queue = [];
    queue.push(v);

    while (queue.length > 0) {
      let u = queue.shift();
      let neighbors = this.edgeList.get(u);
      color[u] = 'gray';
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] == 'white') {
          color[w] = 'gray';
          queue.push(w);
        }
      }
      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  }


  _bfs(v, callback) {
    let color = this.initColor();
    let queue = [];
    queue.push(v);
    while (queue.length>0) {
      let u = queue.shift();
      color[u] = 'gray';
      let children = this.edgeList.get(u);
      for (let i = 0; i < children.length; i++){
        let w = children[i];
        if (color[w] === 'white') {
          color[w] = 'gray';
          queue.push(w);
        }
      }
      color[u] = 'black';
      if (callback) callback(u);

  }
}

var g = new Graph();

g.addNode('1');
g.addNode('2');
g.addNode('3');
g.addNode('4');
g.addNode('5');
g.addEdge('1', '2');
g.addEdge('1', '3');
g.addEdge('2', '3');
g.addEdge('2', '5');
g.addEdge('3', '4');
g.addEdge('3', '5');
g.addEdge('4', '5');

g.printGraph();
