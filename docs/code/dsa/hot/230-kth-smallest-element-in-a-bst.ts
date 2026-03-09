/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    let res = 0;
    function dfs(node: TreeNode | null): void {
        if (!node || k <= 0) return;
        dfs(node.left); // 中序遍历
        if(--k === 0){
            res = node.val;
        }
        dfs(node.right);
    }
    dfs(root);
    return res;
};