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
    if (currentNode.data === newNode.data) {
        return true
    } else if (newNode.data < currentNode.data) {
        currentNode = rootNode.left;
        if (currentNode) {
            if (currentNode.data === newNode.data) {
                return true
            } else {
                return findOrAdd(currentNode, newNode)
            }
        } else {
            rootNode.left = newNode;
        }
    } else if (newNode.data > currentNode.data) {
        currentNode = rootNode.right;
        if (currentNode) {
            if (currentNode.data === newNode.data) {
                return true
            } else {
                return findOrAdd(currentNode, newNode);
            }
        } else {
            rootNode.right = newNode;
        }
    }
}

function max(rootNode) {
    if (!rootNode.right) {
        return rootNode;
    } else {
        return max(rootNode.right)
    }
}