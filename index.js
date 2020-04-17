function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  if(rootNode.data === newNode.data) {
    return true
  } else {
  //  compare rootNode to newNode
    if(newNode.data < rootNode.data) {
      if(rootNode.left != null) {
        return findOrAdd(rootNode.left, newNode)
      } else {
        return rootNode.left = newNode
      }
    } else {
      if(rootNode.right != null) {
        return findOrAdd(rootNode.right, newNode)
      } else {
        return rootNode.right = newNode
      }
    }
  }
}

function max(node) {
//  find right-most node
  if(node.right) {
    return max(node.right)
  } else {
    return node
  }
}

function min(node) {
//  find left-most node
  if(node.left) {
    return max(node.left)
  } else {
    return node
  }
}
