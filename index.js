function inOrder(rootNode) {
  let currentNode = rootNode
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode

  if (newNode.data < currentNode.data ) {
    currentNode = rootNode.left
    if (currentNode) {
      return findOrAdd(currentNode, newNode)
    } else {
      return rootNode.left = newNode
    }
  }

  if (newNode.data > currentNode.data) {
    currentNode = rootNode.right
    if (currentNode) {
      return findOrAdd(currentNode, newNode)
    } else {
      return rootNode.right = newNode
    }
  }

  if (currentNode.data == newNode.data) {
    return true
  }
}

function max(rootNode) {
  let rightNode = rootNode.right
  if (rightNode) {
    return max(rightNode)
  } else {
    return rootNode
  }
}

function min(rootNode) {
  let leftNode = rootNode.left
  if (leftNode) {
    return min(leftNode)
  } else {
    return rootNode
  }
}
