class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const removeNode = (head, targetVal) => {
    let current = head;
    let prev = null

    //edge case if the head is the targetval, just set head to head.next
    if (head.val === targetVal) {
      return head.next
    }

    while (current !== null) {
      if (current.val === targetVal) {
        prev.next = current.next
        break
      }
      //shift over 1
      prev = current
      current = current.next
    }
    return head

  };

  //time is O(n) and space is O(1)
