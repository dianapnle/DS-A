


//depth first recursion
const treeSum = (root) => {
    //base case, calculating of a null node
    if (root === null) return 0;

    //recursive step
    let sumLeft = treeSum(root.left);
    let sumRight = treeSum(root.right);
    return root.val + sumLeft + sumRight;
  };

//O(n) time and space is O(n)



//iterative: breadth first
if (root === null) return 0;
let sum = 0;
let queue = [ root ]
while (queue.length !== 0) {
    //do stuff to the queue
    let node = queue.shift();
    sum += node.val;

  //if not null add to the queue
  if (node.left) queue.push(node.left)
  if (node.right) queue.push(node.right)
}
return sum
