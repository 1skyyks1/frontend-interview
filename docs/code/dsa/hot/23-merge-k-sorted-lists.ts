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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let res = null;
    for(let i = 0; i < lists.length; i++){
        res = merge2Lists(res, lists[i]);
    }
    return res;
};

function merge2Lists(list1: ListNode | null, list2: ListNode | null){
    let dummy = new ListNode();
    let head = dummy, head1 = list1, head2 = list2;
    while(head1 && head2){
        if(head1.val < head2.val){
            head.next = head1;
            head1 = head1.next;
        }
        else{
            head.next = head2;
            head2 = head2.next;
        }
        head = head.next;
    }
    head.next = head1 ? head1: head2;
    return dummy.next;
}