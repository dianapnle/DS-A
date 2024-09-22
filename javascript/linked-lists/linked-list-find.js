class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const linkedListFind = (head, target) => {
    let current = head;
    while (current !== null) {
      if (current.val === target) {
        return true
      } else {
        current = current.next
      }
    }
    return false
  };

  //time: O(n) but space is O(1)


  const linkedListFindRecursive = (head, target) => {
   //base case 1 if head.val === target then return true
    //base case 2 if head is null then false
    if (head === null) return false

    if (head.val === target) return true

    return linkedListFind(head.next, target)
  };

  //O(n) time and space complexity space because of call stack
