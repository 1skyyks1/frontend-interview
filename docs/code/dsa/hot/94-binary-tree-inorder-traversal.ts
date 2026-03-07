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

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    return root === null ? [] : [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

function inorderTraversal2(root: TreeNode | null): number[] {
    const res = [];
    while(root){
        if(root.left){
            let pre = root.left;
            while(pre.right && pre.right !== root){
                pre = pre.right;
            }
            if(pre.right === null){
                pre.right = root;
                root = root.left;
                continue;
            }
            pre.right = null;
        }
        res.push(root.val);
        root = root.right;
    }
    return res;
};