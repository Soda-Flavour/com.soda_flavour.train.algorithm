class Node {
  constructor(key) {
    this.left = null;
    this.key = key;
    this.right = null;
  }
}

class BST {
  root;
  constructor() {
    this.root = null;
  }

  print(val) {
    console.log(val);
  }

  insert(key) {
    let node = new Node(key);

    if (this.root === null) this.root = node;
    else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  iot(callback) {
    this.iotNode(this.root, callback);
  }

  iotNode(node, callback) {
    if (node) {
      this.iotNode(node.left, callback);
      callback(node.key);
      this.iotNode(node.right, callback);
    }
  }

  search(key) {
    let isExist = this.searchNode(this.root, key);
    console.log(isExist);
    return isExist;
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) return null;

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      let aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}

let tree = new BST();

tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(3);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(16);
tree.insert(12);
tree.insert(11);
tree.insert(21);
tree.insert(20);

tree.iot(tree.print);

console.log('///////////');

console.log('min', tree.min());
console.log('max', tree.max());
console.log('///////////');
console.log('///////////');
tree.remove(1);
tree.iot(tree.print);
console.log('min', tree.min());
console.log('///////////');
console.log('///////////');
console.log('///////////');

tree.remove(21);
tree.iot(tree.print);
console.log('max', tree.max());
console.log('///////////');
console.log('///////////');
console.log('///////////');

tree.remove(20);
tree.remove(3);

tree.iot(tree.print);

console.log(tree.search(6));
console.log(tree.search(1));
