/*
node = {data: 5, left:
          {data: 3, left: null, right: null},
            right: {data: 7, left: null,
            right: {data: 9, left: null, right: null}
          }}
*/

function inOrder(currentNode) {
  // prints out the data in node from lowest to highest
  // order: left, center, right
  
  if (currentNode.left) {
    inOrder(currentNode.left)
  } 
  console.log(currentNode.data)
  if (currentNode.right) {
    inOrder(currentNode.right);
  }
  
}

function findOrAdd(rootNode, newNode) {
  // add presented node if data does not exist
  // add new elements on a multilevel tree
  // return true if and not modify the tree if element exists
  console.log(rootNode, newNode)
  let currentNode = rootNode;
  
  // example:
  /* newNode: 7
          6 
       /    \
      3       8
  */

  if (currentNode.data === newNode.data) return true;
  
  if (newNode.data < currentNode.data) {
    // check left side
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode)
    } else {
      return currentNode.left = newNode
    }
  } else if (newNode.data > currentNode.data) {
    // check right side 
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode)
    } else {
      return currentNode.right = newNode
    }
  }
}



function max(node) {
  let currentNode = node 
  
  // check for right node (larger child)
  if (currentNode.right) {
    // if exists, recursively get next larger child
    return max(currentNode.right)
  } else {
    // when reached end, return largest node
    return currentNode
  }
}



function min(node) {
  let currentNode = node
  
  // check if left child node (smaller) exists
  // if so, recursively get next left child
  // repeat until reached end
  // then just return min child node
  if (currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode
  }
}












