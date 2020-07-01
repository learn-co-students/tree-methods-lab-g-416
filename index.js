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
    if (newNode.data === rootNode.data) {
        return true;
    } else if (newNode.data < rootNode.data) {
        if (rootNode.left) {
            return findOrAdd(rootNode.left, newNode)
        } else {
            rootNode.left = newNode;
        }
    } else {
        if (rootNode.right) {
            return findOrAdd(rootNode.right, newNode)
        } else {
            rootNode.right = newNode;
        }
    }
}

function max(node) {
    if (node.right) {
        return max(node.right)
    } else {
        return node;
    }
}

function min(node) {
    if (node.left) {
        return min(node.left)
    } else {
        return node;
    }
}