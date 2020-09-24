const inOrder = (currentNode) => {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);
  if (currentNode.right) {
    inOrder(currentNode.right);
  }
  return currentNode.data;
};

const findOrAdd = (rootNode, newNode) => {
  let currentNode = rootNode;
  if (newNode.data < rootNode.data) {
    currentNode = rootNode.left;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.left = newNode;
    }
  } else if (newNode.data > rootNode.data) {
    currentNode = rootNode.right;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.right = newNode;
    }
  }
  return true;
};

const max = (node) => {
  if (node.right) {
    return max(node.right);
  }
  return node;
};

const min = (node) => {
  if (node.left) {
    return min(node.left);
  }
  return node;
};
