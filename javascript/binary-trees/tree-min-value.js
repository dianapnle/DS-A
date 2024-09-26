const treeMinValue = (root) => {
    //breadth
   let min = Infinity;
   let queue = [root];


   while (queue.length !== 0) {
       let current = queue.shift();
       if (current.val < min) {
         //replace the val if its less
         min = current.val;
         console.log(min)
       }

     //add the children
     if (current.left !== null) queue.push(current.left)
     if (current.right !== null) queue.push(current.right)
   }
   console.log(min)
   return min
 };

  // time is O(n^2) and sapce is O(ncause of shift)


 const treeMinDepthFirstIterative = (root) => {
    //depth first iterative
let min = Infinity;
let stack = [root]

while (stack.length !== 0) {
  let current = stack.pop();
    if (current.val < min) {
      //replace the val if its less
      min = current.val;
    }

  //add the children
  if (current.left !== null) stack.push(current.left)
  if (current.right !== null) stack.push(current.right)
}
return min
}

  // time is O(n) and spce is O(n)




//recursion = depth first
const treeMinValueRecursion = (root) => {

  if (root === null) return Infinity;

  //should give the smallest in left and right, but also need to compare to root.val (self) and find the smallest of the three
  let smallestLeft = treeMinValue(root.left)
  let smallestRight = treeMinValue(root.right)
  return Math.min(root.val, smallestLeft, smallestRight)

}
