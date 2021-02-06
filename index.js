function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
      inOrder(currentNode.right)
    }
    console.log(currentNode.data)
  }

  function findOrAdd(rootNode, newNode){
    let currentNode = rootNode
    console.log("Line 14. newNode.data=", newNode.data, " currentNode.data=", currentNode.data)
      if (newNode.data==rootNode.data) {
        return true
      }
    else if(newNode.data < rootNode.data){
        currentNode = rootNode.left
        if(currentNode){
return findOrAdd(currentNode, newNode)
        } else {
         return rootNode.left = newNode
        }
    } else if(newNode.data > rootNode.data) {
      currentNode = rootNode.right
      if(currentNode){
      return findOrAdd(currentNode, newNode)
      } else {
       return rootNode.right = newNode
      }
    }
  }

  
  function max(currentNode){
    if(currentNode.right){
      return max(currentNode.right)
    } else {
      return currentNode;
    }
  }
  
  function min(currentNode){
    if(currentNode.left){
      return min(currentNode.left)
    } else {
      return currentNode;
    }
  }
  