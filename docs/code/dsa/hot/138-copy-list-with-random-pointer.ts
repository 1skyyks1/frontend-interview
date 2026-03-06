/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}


function copyRandomList(head: _Node | null): _Node | null {
    let now = head;
    const map = new Map<_Node, _Node>();
    while(now){
        let node = new _Node(now.val);
        map.set(now, node);
        now = now.next;
    }
    now = head;
    while(now){
        map.get(now).next = map.get(now.next) ?? null;
        map.get(now).random = map.get(now.random) ?? null;
        now = now.next;
    }
    return map.get(head);
};