function findOrAdd(currentNode, newNode) {
  if (currentNode.data === newNode.data) {
    return true
  }
  if (newNode.data > currentNode.data) {
      //no right node exists
    if (!currentNode.right) {
        //create node && append to right subtree
      return currentNode.right = newNode
      } else {
     return  findOrAdd(currentNode.right, newNode)
      }
    } else {
      //left subtree
    if (!currentNode.left) {
        //no left node exists
        //create node && append to left subtree
      return currentNode.left = newNode
      } else {
    return  findOrAdd(currentNode.left, newNode)
      }
    }
  }


function inOrder(currentNode) {
  if (currentNode.left) {
   inOrder(currentNode.left)
      }
  console.log(currentNode.data)
  if (currentNode.right) {
      inOrder(currentNode.right)
      }

    }
function max(currentNode) {
  if (currentNode.right) {
    return max(currentNode.right)
  } else {
    return currentNode;
  }
}

function min(currentNode) {
  if (currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode;
  }
}
