class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const zipperLists = (head1, head2) => {
    //save a variable to track
    let tail = head1;
    //set current1 to the one after head1 because the first node is already assigned in output
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    //if one of the lists is exhausted, the while loop stops
    while (current1 !== null && current2 !== null) {
      //if count is even, you want to add from the second node list
        if(count % 2 === 0) {
          tail.next = current2
          current2 = current2.next;
          //else if it count odd add from the
        } else {
          tail.next = current1
          current1 = current1.next
        }
      //this code happens whether adding from current1 or current 2 and runs every time
        tail = tail.next;
        count+= 1;
    };

    //if one of the lists is exhausted, just set the tail.next to the longer list
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    return head1;
  };


  //recursive

  const zipperListsRecursive = (head1, head2) => {
    if (head1 === null && head2 === null) {
            return null
    }
    //if one list is exhausted, return the rest of the other list
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    //recursive step
    let next1 = head1.next;
    let next2 = head2.next;
    head1.next = head2;

    head2.next = zipperListsRecursive(next1, next2)
    return head1;
  }


  //time and space = O(n)
