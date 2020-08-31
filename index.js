function inOrder(node) {
  if (node.left) {
    inOrder(node.left);
  }
  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(root, newNode) {
  if (root.data > newNode.data) {
    root.right ? findOrAdd(root.right, newNode) : (root.right = newNode);
  } else {
    root.left ? findOrAdd(root.left, newNode) : (root.left = newNode);
  }
}
