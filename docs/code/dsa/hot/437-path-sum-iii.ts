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

function pathSum(root: TreeNode | null, targetSum: number): number {
    let res = 0;
    function dfs(node: TreeNode | null): void {
        if (!node) return;
        sum(node, targetSum);
        dfs(node.left);
        dfs(node.right);
    }
    function sum(node: TreeNode | null, target: number): void {
        if (!node) return;
        target -= node.val;
        if(target === 0) res++;
        sum(node.left, target);
        sum(node.right, target);
    }
    dfs(root);
    return res;
};