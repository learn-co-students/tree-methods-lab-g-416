function inOrder(currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode) {
    let currentNode = rootNode;
    if (newNode.data < currentNode.data) {
        currentNode = rootNode.left;
        if (currentNode) {
            findOrAdd(currentNode, newNode)
        } else {
            rootNode.left = newNode;
        }
    } else if (newNode.data > currentNode.data) {
        currentNode = rootNode.right;
        if (currentNode) {
            findOrAdd(currentNode, newNode);
        } else {
            rootNode.right = newNode;
        }
    }
}