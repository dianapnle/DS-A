class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const linkedListValues = (head) => {
    let res = [];
    let current = head;
    while (current !== null) {
      res.push(current.val);
      current = current.next;
    }
    return res
  };


  //time = O(n)
  //space = O(n) for n nodes


  /////recursion way

  const linkedListValuesRecursion = (head) => {
    let res = [];
    fillValues(head, res)
    return res;
  };


  const fillValues = (head, res) => {
    if (head === null ) return;
    //otherwise is not null, so push into values
    res.push(head.val)
    fillValues(head.next, res)
  }
