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

function detectCycle(head: ListNode | null): ListNode | null {
    let a = head;
    let b = head;
    while(b && b.next){
        a = a!.next;
        b = b.next.next;
        if(a === b){
            let p = head;
            while(p !== a){
                p = p!.next;
                a = a!.next;
            }
            return a;
        }
    }
    return null
};