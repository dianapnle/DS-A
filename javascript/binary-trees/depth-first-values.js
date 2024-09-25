class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }


  //iterative
  const depthFirstValues = (root) => {
    //going as deep as you can before u can't anymore
    //create a stack and only adjust with pop and push
    let res = [];
    let stack = [ root ];

    if (root === null) return [];

    while (stack.length > 0) {
      let current = stack.pop();
      res.push(current.val);

      //only push children if they exist, for depth you want to push right and then left if you want left to pop out first
      //because the one that goes in first comes out later
      if (current.right) stack.push(current.right);
      if (current.left)  stack.push(current.left);
    }
    return res;
  };

  // time and space is O(n)


  const depthFirstValuesRecursion = (root) => {
      //recursion
    //base case is if there is no nodes, there will be an empty array
    if (root === null) return [];

    //recursive step: call on both sides of the tree
    //for recursions assume from the recursive step that you will get what you expect, pretend you get the correct result->
    let leftValues = depthFirstValues(root.left) //[b, d, e]
    let rightValues = depthFirstValues(root.right) //c , f]
    return [root.val, ...leftValues, ...rightValues]
  }

  //O(n) time and O(n^2) for space
