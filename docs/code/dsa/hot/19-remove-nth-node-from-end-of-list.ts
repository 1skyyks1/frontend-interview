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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let h = new ListNode(0, head);
    let left = h, right = h;
    while(n--){
        right = right.next!;
    }
    while(right.next){
        left = left.next!;
        right = right.next;
    }
    left.next = left.next!.next;
    return h.next;
};