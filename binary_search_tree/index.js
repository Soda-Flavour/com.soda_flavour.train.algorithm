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
      insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = node;
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

  iot() {
    this.iotNode(this.root, callback);
  }

  iotNode(node, callback) {
    if (node) {
      this.iotNode(node.left, callback);
      callback(node.key);
      this.iotnode(node.right, callback);
    }
  }

  min() {
    this.minNode(this.root);
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
    this.maxNode(this.root);
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

  search(key) {
    this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) return false;

    if (key < node.key) {
      this.searchNode(node.left, key);
    } else if (key > node.key{
      this.searchNode(node.right, key);
    } else {
      return true;
    }


  }

  remove(key) {
    this.root = removeNode(this.root, key);
  }


  removeNode(node, key) {
    if (node === null) return null;

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.right === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      reutrn node;
    }
  }
}
