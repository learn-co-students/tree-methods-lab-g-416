var chai = require('chai');
var sinon = require('sinon');

let {TreeNode, BinaryTree} = require('../index.js')

beforeEach(function() {
  expect.spyOn(console, 'log')
})

afterEach(function() {
  expect.restoreSpies()
})

describe('#inOrder', function() {
  it("prints out the data in the node from lowest to highest", function() {
    let n5 = new TreeNode(5)
    let n3 = new TreeNode(3)
    let n7 = new TreeNode(7)
    let n9 = new TreeNode(9)

    n5.left = n3
    n5.right = n7
    n7.right = n9

    let tree = new BinaryTree()
    tree.root = n5
    tree.inOrder()

    console.log('tree', tree)

    expect(console.log).toHaveBeenCalledWith(3)
    expect(console.log).toHaveBeenCalledWith(5)
    expect(console.log).toHaveBeenCalledWith(7)
    expect(console.log).toHaveBeenCalledWith(9)
  })
})

describe('#findOrAdd', function() {
  it("should add the presented node if the data does not already exist", function() {
    let tree = new BinaryTree()
    tree.findOrAdd(5)
    tree.findOrAdd(3)
    tree.findOrAdd(7)

    expect(tree.root.left.data).toEqual(3)
    expect(tree.root.right.data).toEqual(7)
  });

  it("should add new elements on a multilevel tree", function() {
    let tree = new BinaryTree()
    tree.findOrAdd(5)
    tree.findOrAdd(3)
    tree.findOrAdd(7)

    expect(tree.root.left.data).toEqual(3)
    expect(tree.root.right.data).toEqual(7)

    tree.findOrAdd(9)
    expect(tree.root.right.right.data).toEqual(9)
  });

  it("should return true if the and not modify the tree if the element exists", function(){
    let tree = new BinaryTree()
    tree.findOrAdd(5)
    tree.findOrAdd(3)
    tree.findOrAdd(7)
    tree.findOrAdd(9)

    let result = tree.findOrAdd(9)
    expect(result).toEqual(true)
  })
});

describe('#max', function() {
  it("should return the maximum element in a tree", function(){
    let tree = new BinaryTree()
    tree.findOrAdd(5)
    tree.findOrAdd(3)
    tree.findOrAdd(7)
    tree.findOrAdd(9)

    expect(tree.max(node)).toEqual(9)
  })
})

describe('#min', function() {
  it("should return the minimum element in a tree", function(){
    let tree = new BinaryTree()
    tree.findOrAdd(5)
    tree.findOrAdd(3)
    tree.findOrAdd(7)
    tree.findOrAdd(9)

    expect(tree.min(node)).toEqual(3)
  })
})
