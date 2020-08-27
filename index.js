function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  let currentNode = rootNode;
  if(rootNode.data === newNode.data){
    console.log('this is true')
    return true;
  }
  if(rootNode.data > newNode.data){
    console.log('newNode is smaller:', newNode.data)
    currentNode = rootNode.left;
    if(currentNode){
      findOrAdd(currentNode, newNode)
    }else{
      rootNode.left = newNode;
    }
  }
  if(rootNode.data < newNode.data){
    console.log('newNode is bigger:', newNode.data)
    currentNode = rootNode.right;
    if(currentNode){
      findOrAdd(currentNode, newNode)
    }else{
      rootNode.right = newNode;
    }
  }
}


function max(rootNode){
  let currentNode = rootNode;
  if(rootNode.right){
    console.log('rootNode.right:', rootNode.right);
    currentNode = rootNode.right;
    currentNode = max(currentNode);
  }
  return currentNode
}

function min(rootNode){
  let currentNode = rootNode;
  if(rootNode.left){
    console.log('rootNode.left:', rootNode.left);
    currentNode = rootNode.left;
    currentNode = min(currentNode);
  }
  return currentNode;
}

let nody = { data: 8, right: {
                        data: 9, left: null, right: {
                        data: 13, left: null, right: null } 
                      },
                      left: { data: 3, left: null, right: null }
            }
            
  min(nody);
  max(nody);
