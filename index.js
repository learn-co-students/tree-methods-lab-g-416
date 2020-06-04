function findOrAdd(rootNode, newNode){
    let currentNode = rootNode

    if(currentNode.data == newNode.data) {
        return true
    }

    if(newNode.data < rootNode.data){
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
 
   

function inOrder( node ) {
     if(node.left) {
         inOrder(node.left)
     }
     console.log(node.data);

     if(node.right) {
         inOrder(node.right)
     }

}

function max(node) {
    if(node.right){
        return max(node.right)
      } else {
        return node;
      }
 }

 function min(node) {
    if(node.left){
        console.log(node.left)
        return min(node.left)
      } else {
        return node;
      }
 }

let node = {data: 5, left:
    {data: 3, left: null, right: null},
      right: {data: 7, left: null,
      right: {data: 9, left: null, right: null}
    }}
    console.log(min(node))

 