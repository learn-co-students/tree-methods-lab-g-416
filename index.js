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
  if (root.data === newNode.data) {
    return true;
  }
  if (root.data < newNode.data) {
    return root.right ? findOrAdd(root.right, newNode) : (root.right = newNode);
  } else {
    return root.left ? findOrAdd(root.left, newNode) : (root.left = newNode);
  }
}

function max(node) {
  return node.right ? max(node.right) : node;
}

function min(node) {
  return node.left ? min(node.left) : node;
}
