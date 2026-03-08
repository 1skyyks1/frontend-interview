# 543. 二叉树的直径

> 题目链接：<https://leetcode.cn/problems/diameter-of-binary-tree/>

## 代码

<<< @/code/dsa/hot/543-diameter-of-binary-tree.ts

## 思路

二叉树的直径是任意两个节点之间路径长度的最大值，该路径可能经过根节点：

1. 使用 DFS 递归计算每个节点的深度
2. 在递归过程中：
   - 计算左子树深度 `left`
   - 计算右子树深度 `right`
   - 更新最大直径 `res = Math.max(res, left + right)`
   - 返回当前节点的深度 `Math.max(left, right) + 1`
3. 最终返回记录的最大直径

### 关键点

- 直径 = 左子树深度 + 右子树深度
- 需要在递归过程中维护全局最大值
- 递归函数返回的是深度，而不是直径

- 时间复杂度 $O(n)$，其中 $n$ 是节点数量
- 空间复杂度 $O(h)$，其中 $h$ 是树的高度，递归调用栈的深度
