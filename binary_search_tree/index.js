class BST {
  root = null;

  constructor() {
    this.root = null;
  }

  insertNode(rootNode, newNode) {
    if (newNode.key < rootNode.key) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  insert(key) {
    let node = new Node(key);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  iot(callback) {
    this.iotNode(this.root, callback);
  }

  iotNode(node, callback) {
    if (node !== null) {
      this.iotNode(node.left, callback);
      callback(node.key);
      this.iotNode(node.right, callback);
    }
  }

  print(value) {
    console.log(value);
  }
}

class Node {
  constructor(key) {
    this.left = null;
    this.key = key;
    this.right = null;
  }
}

let tree = new BST();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);

tree.iot(tree.print);
