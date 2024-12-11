//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
var addTwoNumbers = function(l1, l2) {
    //handle same length lists
    //want to keep going if there's a carry
    //traverse simultaneously

    let dummyhead = new ListNode(null);
    let tail = dummyhead;

    let carry = 0;
    let current1 = l1;
    let current2 = l2;

    while (current1 !== null || current2 !== null || carry === 1) {
        //if something is null substitute a 0 for its value
        let val1 = current1 !== null ? current1.val : 0;
        let val2 = current2 !== null ? current2.val : 0;
        let sum = val1 + val2 + carry;
        //if sum is double digit -> reset the carry
        carry =  sum > 9 ? 1 : 0;
        let digit = sum % 10;

        tail.next = new ListNode(digit);
        //traverse the output
        tail = tail.next;

        //traverse if not null
        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;
    }

    return dummyhead.next;

};
