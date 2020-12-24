function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
      inOrder(currentNode.right)
    }
}

function findOrAdd(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
        let leftNode = currentNode.left
        if (leftNode) {
            return findOrAdd(leftNode, newNode)
        } else {
            currentNode.left = newNode
        }
    } else if (newNode.data > currentNode.data) {
        let rightNode = currentNode.right
        if (rightNode) {
            return findOrAdd(rightNode, newNode)
        } else {
            currentNode.right = newNode
        }
    } else {
        return true
    }
}

function max(currentNode) {
    if (currentNode.right) {
        return max(currentNode.right)
    } else {
        return currentNode
    }
}

function min(currentNode) {
    if (currentNode.left) {
        return max(currentNode.left)
    } else {
        return currentNode
    }
}