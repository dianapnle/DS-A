class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const getNodeValue = (head, index) => {
    let count = 0
    let current = head;
    while (current !== null) {
        if (count === index) {
          return current.val
        }
      current = current.next
      count += 1
    }
    return current
  };

//   Time complexity: O(n)
//   Space complexity: O(1)

  const getNodeValueRecursive= (head, index) => {
    //edge case if index is > number of nodes
    if (head === null) {
      return null;
    }
    //decrementing index to 0 which would be the value
    if (index === 0) {
      return head.val
    };
    return getNodeValue(head.next, index-1)
  }

  //time = O(n)
  //space = O(n)
