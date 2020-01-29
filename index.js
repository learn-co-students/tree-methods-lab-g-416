function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
      inOrder(currentNode.right)
    }
  }

  function findOrAdd(currentNode, newNode){
    if(currentNode.data == newNode.data){
      return true
    }
    if(newNode.data < currentNode.data){
      if(currentNode.left){
        return findOrAdd(currentNode.left, newNode)
      } else {
        return currentNode.left = newNode
      }
    }
  
    if(newNode.data > currentNode.data){
      if(currentNode.right){
        return findOrAdd(currentNode.right, newNode)
      } else {
        return currentNode.right = newNode
      }
    }
  }