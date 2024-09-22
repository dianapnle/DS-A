class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const isUnivalueList = (head) => {
    let unique = [];
    let current = head;
    while (current !== null) {
      unique.push(current.val)
      current = current.next
    }
    let setUnique = new Set (unique)
    if (setUnique.size !== 1) {
      return false
    }
    return true
  };


const isUnivalueListImprovd = (head) => {
    //simply checking if the head.val is the same as every node's value
    let current = head;
    while (current !== null) {
        if (current.val !== head.val) {
            return false
        }
        current = current.next
    };

    return true
}

//time: O(n) ; space: O(1)


const isUnivalueListRecursive = (head, prevVal = null) => {
    if (head === null) return true

    if (prevVal !== null && head.val !== prevVal) {
        return false
    }

    return isUnivalueListRecursive(head.next, head.val)
}
