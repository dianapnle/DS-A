class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const reverseList = (head) => {
    //to reverse, set the current.next to prev which is the one before it
    let current = head;
    let prev = null;
    while (current !== null) {
      //save the current.next to a variable to not lose it
      let next = current.next
      current.next = prev;
      //update the variablesn to grab the next node after and shift everything over
      prev = current
      current = next
    }
    return prev
  };

  //time = O(n)
  //space = O(1)


  const reverseListRecursive = (head, prev=null) => {
    //base case: when reach the end and becomes the new tail so thats the base case where would want to stop
    if (head === null) {
      return prev;
    };
    let next = head.next
    head.next = prev;
    return reverseList(next, head)
  };


  //timeand space : O(n)
