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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    dfs2(root);
}

function dfs2(node: TreeNode | null): TreeNode | null {
    if (node === null) return;
    const left = dfs2(node.left);
    const right = dfs2(node.right);
    if (left) {
        left.right = node.right;
        node.right = node.left;
        node.left = null;
    }
    return right ?? left ?? node;
}