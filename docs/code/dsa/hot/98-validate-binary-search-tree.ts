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

function isValidBST(root: TreeNode | null): boolean {
    return dfs(root, -Infinity, Infinity);
};

function dfs(node: TreeNode | null, min: number, max: number) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
}