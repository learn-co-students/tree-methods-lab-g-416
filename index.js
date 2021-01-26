const { reporters } = require("mocha")

function inOrder(root) {
    if(root.left){
        inOrder(root.left)
    }
    console.log(root.data)
    if(root.right){
        inOrder(root.right)
    }
}

function findOrAdd(root, newNode) {
   if (root.data === newNode.data) {
       return true
   }
   if (root.data < newNode.data) {
        if (root.right) {
            return findOrAdd(root.right, newNode)
        }
        else {
            return root.right = newNode
        }
   }
   if (root.data > newNode.data) {
       if (root.left) {
           return findOrAdd(root.left, newNode)
       }
       else {
           return root.left = newNode
       }
   }
}

function max(node) {
    if (!node.right) {
        return node
    }
    else {
        if (node.right.right) {
            return max(node.right)
        }
        else {
            return node.right
        }
    }
    
}

function min(node) {
    if (!node.left) {
        return node
    }
    else {
        if (node.left.left) {
            return min(node.left)
        }
        else {
            return node.left
        }
    }
}