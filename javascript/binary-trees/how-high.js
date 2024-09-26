const howHigh = (node) => {
    //recursion
    //empty tree
    if (node === null) return -1;
    //1 node is height of 0
    //compare right tree height and left tree height and add 1 because comparing the left and right to self as a parent
    return 1 + Math.max(howHigh(node.left), howHigh(node.right))
  };
  //time is O(n) and space is O(n) due to call stack
