# 226. 翻转二叉树

> 题目链接：<https://leetcode.cn/problems/invert-binary-tree/>

## 代码

<<< @/code/dsa/hot/226-invert-binary-tree.ts

## 思路

使用**递归**翻转二叉树：

1. 递归终止条件：
   - 如果节点为空，返回 null
2. 交换当前节点的左右子树：
   - 使用解构赋值：`[root.left, root.right] = [root.right, root.left]`
3. 递归翻转左子树和右子树
4. 返回根节点

### 关键点

- 先交换左右子树，再递归处理子树
- 使用 ES6 解构赋值简化交换操作
- 递归思想：翻转整棵树 = 交换左右子树 + 递归翻转左右子树

- 时间复杂度 $O(n)$，其中 $n$ 是节点数量
- 空间复杂度 $O(h)$，其中 $h$ 是树的高度，递归调用栈的深度
