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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }
    let dummy = new ListNode(0, head);
    let left = dummy, right = dummy;
    while (right && right.next) {
        for (let i = 0; i < k && right !== null; i++){
            right = right.next!;
        }
        if(right === null){
            break;
        }
        let start = left.next!;
        let end = right.next!;
        right.next = null;
        left.next = reverse(start);
        start.next = end;
        left = start;
        right = left;
    }
    return dummy.next;
};

function reverse(head: ListNode): ListNode{
    let pre = null;
    let now = head;
    while(now){
        const next = now.next!;
        now.next = pre;
        pre = now;
        now = next;
    }
    return pre!;
}