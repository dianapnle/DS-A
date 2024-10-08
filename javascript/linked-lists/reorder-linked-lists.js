/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //find the middle point of the node list which should be slow
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //beginning of second half of the list is, save the slow.next node
        let tail2 = slow.next;
        //split the second half by pointing slow.next to null
        slow.next = null;
        let prev = null;

        while (tail2 !== null) {
            //reversing the second portion of the list
            let temp = tail2.next;
            tail2.next = prev;
            prev = tail2;
            tail2 = temp
        }
        //the prev variable will be the head of the reversed second list
        let v1 = head;
        let head1 = head;
        let v2 = prev;
        let head2 = prev;

        while (head2 !== null) {
            head1 = head1.next;
            v1.next = head2;
            head2 = head2.next;
            v2.next = head1;
            //have the variables v catch up
            v1 = head1;
            v2 = head2;

        }
    }
}
