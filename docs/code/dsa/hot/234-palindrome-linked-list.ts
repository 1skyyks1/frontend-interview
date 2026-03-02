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

function isPalindrome(head: ListNode | null): boolean {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    const len = arr.length;
    for (let i = 0; i < Math.floor(len << 1); i++) {
        if(arr[i] !== arr[len - i - 1]){
            return false;
        }
    }
    return true;
};