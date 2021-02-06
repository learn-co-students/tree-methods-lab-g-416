function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }
  console.log(node.data)
  if (node.right) {
    inOrder(node.right)
  }
}

function findOrAdd(node, newNode) {
  if (newNode.data < node.data) {
    if (node.left) {
      return findOrAdd(node.left, newNode)
    } else {
      node.left = newNode
    }
  } else if (newNode.data > node.data){
    if (node.right) {
      return findOrAdd(node.right, newNode)
    } else {
      node.right = newNode
    }
  } else {
    return true
  }
}

function max(rootNode) {
  if (rootNode.right) {
    return max(rootNode.right)
  } else {
    return rootNode
  }
}

function min(rootNode) {
  if (rootNode.left) {
    return min(rootNode.left)
  } else {
    return rootNode
  }
}