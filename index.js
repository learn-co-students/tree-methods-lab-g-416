// const inOrder = node => {
//   if (node.left) {
//     inOrder(node.left)
//     if (node.right) {
//       console.log(node.data)
//       inOrder(node.right)
//     }
//   } else if (node.right) {
//     console.log(node.data)
//     inOrder(node.right)
//   } else {
//     console.log(node.data)
//   }
// }

const inOrder = node => {
  if (node.left) {
    inOrder(node.left)
  }
  console.log(node.data)
  if (node.right) {
    inOrder(node.right)
  }
}

const findOrAdd = (rootNode, newNode) => {
  if (newNode.data < rootNode.data) {
    if (rootNode.left === null) {
      rootNode.left = newNode
    } else {
      findOrAdd(rootNode.left, newNode)
    }
  } else if (newNode.data > rootNode.data) {
    if (rootNode.right === null) {
      rootNode.right = newNode
    } else {
      findOrAdd(rootNode.right, newNode)
    }
  }
  return true
}


const max = node => {
  if (!node.right) {
    return node
  } else {
    return max(node.right)
  }
}

const min = node => {
  if (!node.left) {
    return node
  } else {
    return min(node.left)
  }
}
