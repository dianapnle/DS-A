const howHigh = (node) => {
    //recursion
    //empty tree
    if (node === null) return -1;
    //1 node is height of 0
    //compare right tree height and left tree height and add 1 because comparing the left and right to self as a parent
    return 1 + Math.max(howHigh(node.left), howHigh(node.right))
  };
  //time is O(n) and space is O(n) due to call stack

  ///breadth first
  class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {

        if (root === null) return 0

        let level = 0;
        //BFS
        let queue = [root];
        while (queue.length !== 0) {
            for (let i = 0; i < queue.length; i ++) {
                //add all the children on this level
                let current = queue.shift();
                if (current.left) {
                    queue.push(current.left)
                }
                if (current.right) {
                    queue.push(current.right)
                }
            }
            level += 1
        }
        return level
    }
}

//depth first
class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root) {

      if (root === null) return 0
      let max = 1;
      //depth first
      let stack = [{node:root, level: 1}];
      while (stack.length !== 0) {
          let {node, level} = stack.pop();
          if(level > max) max = level;
          //add the children if node right and left exist
          if(node.left) stack.push({node: node.left, level: level + 1});
          if (node.right) stack.push({node: node.right, level: level + 1})
      }
      return max;
  }
}
