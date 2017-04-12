function Node(data, right, left){
  this.data = data;
  this.right = right;
  this.left = left;
  this.show = show;
}

function show(){
  return this.data;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.insert = function(data){
  var node = new Node(data, null, null);
  if(this.root === null){
    this.root = node;
    return;
  }
  var current = this.root;
  while(true){
    if(current.data > data){
      if(current.left === null){
        current.left = node;
        break;
      }
      else{
        current = current.left;
      }
    }
    else{
      if(current.right === null){
        current.right = node;
        break;
      }
      else{
        current = current.right;
      }
    }
  }
  return this.root;
}

// return as a list of array
// inOrder: visits all node of a BST in ascending order of the node key trees
// under the left child of the root node, followed by the nodes in the subtrees under the right child of the root node.
var inOrder = function(node){
  if(node === null){
    return [];
  }
  return inOrder(node.left).concat(node.data).concat(inOrder(node.right));
}

/*
* preOrder: travresal visits the root node first, followed by the nodes in the subtrees
* udner the left child of the root node, followed by the nodes in the subtree under the
* the right child of the root node.
*/
var preOrder = function(node){
  if(node === null){
    return [];
  }
  return [node.data].concat(preOrder(node.left)).concat(preOrder(node.right));
}

/*
* postOrder: traversal visits all of the child nodes of the left subtree
* up to the root node, and then visits all of the child nodes of the right
* subtree up to the root node.
*/
var postOrder = function(node){
  if(node === null){
    return [];
  }
  return postOrder(node.left).concat(postOrder(node.right)).concat(node.data);
}

//  breadth first traversal: level order tree traversal
var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

var breadthFirst = function(node){
  var array = [];
  if(node === null){
    return array;
  }
  var queue = new Queue();
  queue.enqueue(node);
  while(!queue.isEmpty()){
    var level = [];
    var size = queue.length;
    for(var i = 0; i < size; i++){
      var head = queue.dequeue();
      level.push(head.data);
      if(head.left !== null){
        queue.enqueue(head.left);
      }
      if(head.right !== null){
        queue.enqueue(head.right);
      }
    }
    array.push(level);
  }
  return array;
}
