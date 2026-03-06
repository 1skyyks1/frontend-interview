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

function sortList(head: ListNode | null): ListNode | null {
    // 归并排序
    if(head === null || head.next === null){
        return head;
    }
    let mid = midNode(head);
    return mergeSort(sortList(head), sortList(mid));
};

function midNode(head){
    let pre = head, slow = head, fast = head;
    while(fast && fast.next){
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    return slow;
}

function mergeSort(left, right) {
    let dummy = new ListNode();
    let now = dummy;
    while (left && right) {
        if (left.val < right.val) {
            now.next = left;
            left = left.next;
        }
        else {
            now.next = right;
            right = right.next;
        }
        now = now.next;
    }
    now.next = left ?? right;
    return dummy.next;
}