class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const createLinkedList = (values) => {
    let dummyHead = new Node (null);
    let tail = dummyHead

    //iterate through the array creating nodes
    for (val of values) {
      let current = new Node(val)
      tail.next = current;
      tail = tail.next
    }
    return dummyHead.next
  };

  //time = O(n) | space = O(n) becuse creating notes


  const createLinkedListRecursive1 = (values) => {
        if (values.length === 0) {
            return null;
        }
        let head = new Node(values[0]);

        head.next = createLinkedList(values.slice(1))
        return head;
  }
//time would be O(n^2)



const createLinkedListRecursiveImproved = (values, i=0) => {
    if (i === values.length) {
        return null;
    }
    let head = new Node(values[i]);

    head.next = createLinkedList(values, i + 1)
    return head;
}
//timeO(n) and space O(n)
