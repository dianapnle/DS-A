const leafList = (root) => {
    // depth to get the lower levels, cannot be breadth cause won't give u proper order
    if (root === null) return [];

    let res = [];
    let stack = [root]
    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.left === null && current.right === null) res.push(current.val)

      if (current.right !== null) stack.push(current.right)
      if (current.left !== null) stack.push(current.left)

    }
    return res
  };


// time and space = O(n)

const leafListRecursive = (root) => {
    let leaves = [];
    fillLeaves(root, leaves)
    return leaves

}

const fillLeaves = (root, leaves) => {
    if (root === null) return;
    if (root.left === null && root.right === null) leaves.push(root.val)
    //before it evaluates the right subtree it will return the left side in order
    fillLeaves(root.left, leaves)
    fillLeaves(root.right, leaves)
}

//O(n) time and space
