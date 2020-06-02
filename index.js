function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}


function findOrAdd(rootNode, newNode){
  let currentNode = rootNode
  if(newNode.data < rootNode.data){
    if (currentNode.left){
      return findOrAdd(currentNode.left, newNode)
    }
    else{
      currentNode.left = newNode
    }
  }
  else if (newNode.data > rootNode.data) {
    if (currentNode.right){
      return findOrAdd(currentNode.right, newNode)
    }
    else{
      currentNode.right = newNode
    }
  }
  else if (newNode.data === rootNode.data) {
    return true
  }
}

function max(node){
  if (node.right){
    return max(node.right)
  }
  else {
    return node
  }
}

function min(node){
  if (node.left){
    return min(node.left)
  }
  else{
    return node
  }
}
