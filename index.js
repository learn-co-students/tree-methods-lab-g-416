function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
      inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode) {
    if (rootNode.data === newNode.data) {
        return true
    }
    if (rootNode.data > newNode.data) {
        if (rootNode.left) {
            return findOrAdd(rootNode.left, newNode)
        } else {
            return rootNode.left = newNode
        }
    } else if (rootNode.data < newNode.data) {
        if (rootNode.right) {
            return findOrAdd(rootNode.right, newNode)
        } else {
            return rootNode.right = newNode
        }
    }
}

function max(node) {
    if (node.right) {
        return max(node.right)
    } else {
        return node
    }
}

function min(node) {
    if (node.left) {
        return min(node.left)
    } else {
        return node
    }
}