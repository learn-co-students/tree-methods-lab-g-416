function inOrder(currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left);
    } 
    console.log(currentNode.data);
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode) {
    if (rootNode.data > newNode.data) {
        let currentNode = rootNode.left;
        if (currentNode) {
            return findOrAdd(currentNode, newNode);
        } else {
            rootNode.left = newNode;
        }
    } else if (rootNode.data < newNode.data) {
        let currentNode = rootNode.right;
        if (currentNode) {
            return findOrAdd(currentNode, newNode);
        } else {
            rootNode.right = newNode;
        }
    } else if (rootNode.data === newNode.data) {
        return true;
    }
}

function max(node) {
    if (node.right) {
        let currentNode = node.right;
        return max(currentNode);
    } else {
        return node;
    }
}

function min(node) {
    if (node.left) {
        let currentNode = node.left;
        return max(currentNode);
    } else {
        return node;
    }
}