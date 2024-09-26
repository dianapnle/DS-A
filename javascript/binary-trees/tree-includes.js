// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//iterative
const treeIncludes = (root, target) => {
    //breadth (usually iterative)
    let queue = [root];

    if (root === null) return false;

    while (queue.length !== 0) {
      //handle the current value in queue
      let current = queue.shift();
      if (current.val === target) {
          return true
      }
      //keep adding children to the queue if didn't return yet
      if (current.left !== null) queue.push(current.left)
      if (current.right !== null) queue.push(current.right)
    }
    //return false if going through whole queue and none fit the target
    return false
  };


  //recursion
  const treeIncludesRecursive = (root, target) => {

    if (root === null) return false;

    if (root.val === target) return true;

    return treeIncludes(root.left, target) || treeIncludes(root.right, target)
  };
