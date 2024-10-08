class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const mergeLists = (head1, head2) => {
    //create a dummy new head for output
    let newhead = new Node(null);
    //set tail of output to point to same one
    let tail = newhead;

    let current1 = head1;
    let current2 = head2;

    while (current1 !== null && current2 !== null) {
      if (current1.val < current2.val) {
        //conditional to determine which node to set the tail.next
        tail.next = current1;
        current1 = current1.next
      } else {
        tail.next = current2;
        current2 = current2.next
      }
      //move the current tail over to next each time
      tail = tail.next
    }
    //once one of the lists is exhausted, the loop will exit and tack on the rest of the
    //non null list
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    //dummy head is technically null so return the next
    return newhead.next
  };

  //Time O(min(n, m)); space O(1) b/c no new nodes

  //recursive

const mergeListsRecursive = (head1, head2) => {
    //base case when both lists are empty you just return
    if (head1 === null && head2 === null) return null
    //leftover logic when one list gets exhausted you just add the rest
    if (head1 === null) return head2;
    if (head2 === null) return head1;


    if (head1.val < head2.val) {
        //save the head1.next to a variable to be passed into the recursion
        let next1 = head1.next
        head1.next = mergeListsRecursive(next1, head2);
        //return the head1 since this is assuming head1.val < head2.val
        return head1
    } else {
        let next2 = head2.next
        head1.next = mergeListsRecursive(head1, next2);
        return head2;
    }

}





/////////////////
class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
      //create a dummy new head for output
      //set tail of output to point to same one
      let newhead = { val: 0, next: null };
      //or let newhead = new ListNode(null)
      let tail = newhead;

      while(list1 !== null && list2!== null) {
          if (list1.val < list2.val) {
              //move to next node
              tail.next = list1;
              list1 = list1.next;
          } else {
              tail.next = list2;
              list2 = list2.next
          }
          tail = tail.next;
      }
      //once one of the tails is exhausted,  the loop will exit and set the rest of the non null list
      if (list1 !== null) tail.next = list1;
      if (list2 !== null) tail.next = list2;
      return newhead.next
  }
}
