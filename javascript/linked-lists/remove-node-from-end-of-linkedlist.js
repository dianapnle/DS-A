class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

    //want to shift right by n times
        while (n > 0 && right !== null) {
            right = right.next
            n -= 1
        }
        //shift until right reaches end of the list,
        //left pointer will be at the one node before the one to be removed
        while (right !== null) {
            left = left.next;
            right = right.next;
        }
        //delete the current node
        left.next = left.next.next;

        return dummy.next;
    }
}
//time is O(n)
