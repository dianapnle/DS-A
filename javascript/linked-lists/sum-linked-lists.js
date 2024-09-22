class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
      sum += current.val
      current = current.next
    }
    return sum
  };

  const sumListRecursive = (head) => {
    //base case
    if (head === null) {
      return 0
    }
    //recursive
    return head.val + sumList(head.next)
  }


  //time O(n)
  // space O(n) if iteratively but O(n) if recursive because of the recursive function calls
