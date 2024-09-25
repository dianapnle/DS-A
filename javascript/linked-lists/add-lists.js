const addLists = (head1, head2) => {
    // //recursive
    //  if (head1 === null && head2 === null && carry === 0) return null

    //  //if null , use actual value
    //  let val1 = head1 === null ? 0 : head1.val;
    //  let val2 = head2 === null ? 0: head2.val;

    //  let sum = val1 + val2 + carry;
    //  //handle carries
    //  let nextCarry = sum > 9 ? 1 : 0;
    //  let digit = sum % 10;

    //  let result = new Node(digit);

    //  let next1 = head1 === null ? null : head1.next
    //  let next2 = head2 === null ? null : head2.next

    //  result.next = addLists(next1, next2, nextCarry)
    //  //return the current node up the frame
    //  return result

  //iterative
  let dummyhead = new Node(null);
  let tail = dummyhead;

  let carry = 0;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null || current2 !== null || carry === 1) {
      let val1 = current1 === null ? 0 : current1.val;
      let val2 = current2 === null ? 0: current2.val;
      let sum = val1 + val2 + carry;
    //reset the carry
      carry = sum > 9 ? 1 : 0;
      let digit = sum % 10;

    //edge case if one of the currents is null
    //traversal logic

    if (current1 !== null) current1 = current1.next
    if (current2 !== null) current2 = current2.next

    //edge case of final carry:
      tail.next = new Node(digit)
    //traverse the output as well
      tail = tail.next
  }
  return dummyhead.next
   }

   //O(n)
