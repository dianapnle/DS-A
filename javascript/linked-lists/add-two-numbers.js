//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
var addTwoNumbers = function(l1, l2) {
    //handle same length lists
    //want to keep going if there's a carry
    //traverse simultaneously

    let dummyhead = new ListNode(null);
    let tail = dummyhead;

    let carry = 0;

    while (l1 !== null || l2 !== null || carry == 1) {
        //if l1 or l1 value is null -> set to 0 or use val
        let val1 = (l1 === null) ? 0 : l1.val;
        let val2 = (l2 === null) ? 0 : l2.val;
        let sum = val1 + val2 + carry;

        //if sum is over 9 -> reset the carry
        carry = sum > 9 ? 1 : 0;
        //set the result tail.next to the sum % 10
        tail.next = new ListNode(sum % 10);
        // traverse the output to not overwrite
        tail = tail.next;

        //traverse the l1 and l2 lists if not null
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return dummyhead.next;

};
