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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;
    const val = preorder[0];
    const root = new TreeNode(val);
    const index = inorder.indexOf(val);

    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};

function buildTree2(preorder: number[], inorder: number[]): TreeNode | null {
    function dfs(preStart: number, preEnd: number, inStart: number, inEnd: number): TreeNode | null {
        if (preEnd < preStart) return null;
        const val = preorder[preStart];
        const root = new TreeNode(val);
        const index = inorder.indexOf(val);
        const leftSize = index - inStart;

        root.left = dfs(preStart + 1, preStart + leftSize, inStart, index - 1);
        root.right = dfs(preStart + leftSize + 1, preEnd, index + 1, inEnd);

        return root
    }

    return dfs(0, preorder.length - 1, 0, inorder.length - 1);
};