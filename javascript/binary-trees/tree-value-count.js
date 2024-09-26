const treeValueCountRecursive = (root, target) => {

    //depth recursive
    //base case
    if (root === null) return 0
    //if the root has a val and whether or not it matches the target
    let match = root.val === target ? 1: 0
    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target)
  };

  //O(n) time and space because going through each node once and constant variables


  const treeValueCountIterativeDepth = (root, target) => {
    let stack = [root];
    let count = 0;
    if (root === null) return 0;

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.val === target) count += 1;

      if (current.left !== null) stack.push(current.left);
      if (current.right !== null) stack.push(current.right);
    }
    return count
  }

  const treeValueCountIterativeBreadth = (root, target) => {
    let count = 0;
    let queue = [root]

    //edge case if root is null then return 0
    if (root === null) return 0;

    while (queue.length !== 0) {
        //handle the current
        let current = queue.shift();
        if (current.val === target) count += 1;

        //add the children to traverse
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
        }

   return count;
  }

  //all time and space complexities are O(n) except breadth because shift is technically O(n) complexity
  
