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
    let nodeExists;
    if (newNode.data < rootNode.data) {
        if (rootNode.left) {
            findOrAdd(rootNode.left, newNode)
        } else {
            rootNode.left = newNode
        }

    } else if (newNode.data > rootNode.data) {
        if (rootNode.right) {
            findOrAdd(rootNode.right, newNode)
        } else {
            rootNode.right = newNode
        }
    } else {
        return true;
    }
    return nodeExists
}

function max(node) {
    let go = true;
    while( go ) {
        if (!node.right) {
            go = false
        } else {
            node = node.right
        }
    }
    return node;
}

let min = (node) => {
    let go = true;
    while( go ) {
        if (!node.left) {
            go = false
        } else {
            node = node.left
        }
    }
    return node;
}