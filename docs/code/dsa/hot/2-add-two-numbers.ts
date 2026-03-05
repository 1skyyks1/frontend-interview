/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let list = new ListNode();
    let head = list;
    let carry = 0;
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        list = list.next = new ListNode(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return head.next;
};