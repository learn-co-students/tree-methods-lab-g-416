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

    if (newNode.data < rootNode.data) {
        if (rootNode.left) {
            return findOrAdd(rootNode.left, newNode)
        } else {
            return rootNode.left = newNode
        }
    }

    if (newNode.data > rootNode.data) {
        if (rootNode.right) {
            return findOrAdd(rootNode.right, newNode)
        } else {
            return rootNode.right = newNode
        }
    }

    if (newNode.data === rootNode.data) {
        return true
    }
}

function max(node) {
    if(node.right){
        return max(node.right)
    } else {
        return node
    }
}

// function max(node) {
//     let go = true;
//     while( go ) {
//         if (!node.right) {
//             go = false
//         } else {
//             node = node.right
//         }
//     }
//     return node;
// }

function min(node) {
    if (node.left) {
        return min(node.left)
    } else {
        return node
    }
}

// let min = (node) => {
//     let go = true;
//     while( go ) {
//         if (!node.left) {
//             go = false
//         } else {
//             node = node.left
//         }
//     }
//     return node;
// }