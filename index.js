class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  inOrder() {
    this._inOrder(this.root)
  }

  _inOrder(node) {
    if (node === null) {
      return
    }

    this._inOrder(node.left)
    console.log(node.data)
    this._inOrder(node.right)
  }

  findOrAdd(value) {
    if (this.root === null) {
      this.root = new TreeNode(value)
    } else {
      return this._findOrAdd(this.root, value)
    }
  }

  _findOrAdd(node, value) {
    if (node.data === value) {
      return true
    } else if (value < node.value && node.left === null) {
      node.left = new TreeNode(value)
    } else if (value > node.value && node.right === null) {
      node.right = new TreeNode(value)
    } else if (value < node.value) {
      return this._findOrAdd(node.left, value)
    } else if (value > node.value) {
      return this._findOrAdd(node.right, value)
    }
  }

  max() {
    return this._max(this.root)
  }

  _max(node) {
    if (node.right === null) {
      return node.data
    }
    return this._max(node.right)
  }

  min() {
    return this._min(this.root)
  }

  _min(node) {
    if (node.left === null) {
      return node.data
    }
    return this._min(node.left)
  }
}

module.exports = {TreeNode, BinaryTree}