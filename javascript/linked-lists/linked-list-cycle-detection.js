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
     * @return {boolean}
     */
    hasCycle(head) {
        //push node directly into hash
        let hash = new Set ();
        let current = head;
        while (current !== null) {
            if (hash.has(current)) {
                return true
            }
            hash.add(current);
            current = current.next
        }
        return false
    }
}
