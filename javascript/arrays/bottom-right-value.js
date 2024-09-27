const bottomRightValue = (root) => {
    let queue = [root];
    let current = null;
    //has to be breadth because if adding left child before right child ->
    //right child will be visited later because first in first out

    while (queue.length !== 0) {
      current = queue.shift();
      if (current.left !== null) queue.push(current.left)
      if (current.right !== null) queue.push(current.right)
    }
    //since right side is the last one leaving -> the bottom most right value is the current value
    return current.val
    //time is O(n^2) because of n times shift which is O(n)
    //space is O(n)
  };
