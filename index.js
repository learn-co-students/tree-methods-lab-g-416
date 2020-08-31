function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  } 
  console.log(node.data)
  if(node.right){
    inOrder(node.right)
  }
}