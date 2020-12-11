// let node = {data: 5, left:
// {data: 3, left: null, right: null},
// right: {data: 7, left: null,
// right: {data: 9, left: null, right: null}
// }}

// function inOrder(node){
//    node.left && inOrder(node.left)
//    console.log(node.data)
//    node.right && inOrder(node.right)
// }

function inOrder(node){
    if (node.left) {
        inOrder(node.left)
    }
    console.log(node.data)
    if (node.right) {
        inOrder(node.right)
    }
}
// let rootNode = {data: 5, left: null, right: null}
// let firstNewNode = {data: 3, left: null, right: null}
// let secondNewNode = {data: 7, left: null, right: null}
function findOrAdd(currentNode, newNode){
    if (currentNode.data == newNode.data){
        return true
    }
    
    if (newNode.data < currentNode.data) {
        if (currentNode.left) {
            //currentNode = currentNode.left
            return findOrAdd(currentNode.left, newNode)
        } else {
            return currentNode.left = newNode
        }
    }
    
    if (newNode.data > currentNode.data){
        if (currentNode.right) {
            //currentNode = currentNode.right    
            return findOrAdd(currentNode.right, newNode)
        } else {
            return currentNode.right = newNode
        }
    } 
}
// let node = {data: 5, left:
//     {data: 3, left: null, right: null},
//       right: {data: 7, left: null,
//       right: {data: 9, left: null, right: null}
//     }}
function max(node){
    while (node.right !== null){
        node = node.right
    }
    return node
}
// let node = {data: 5, left:
//     {data: 3, left: null, right: null},
//       right: {data: 7, left: null,
//       right: {data: 9, left: null, right: null}
//     }}
function min(node) {
    while (node.left !== null){
        node = node.left
    }
    return node
}