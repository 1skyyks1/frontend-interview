# 108. 将有序数组转换为二叉搜索树

> 题目链接：<https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/>

## 代码

<<< @/code/dsa/hot/108-convert-sorted-array-to-binary-search-tree.ts

## 思路

将有序数组转换为高度平衡的二叉搜索树，关键是选择中间元素作为根节点：

1. 使用递归 DFS 构建二叉树
2. 递归函数参数：
   - `left`：当前子数组的左边界（包含）
   - `right`：当前子数组的右边界（不包含）
3. 递归过程：
   - 如果 `left === right`，说明区间为空，返回 null
   - 计算中间位置 `mid = Math.floor((left + right) / 2)`
   - 以 `nums[mid]` 为根节点
   - 递归构建左子树：`dfs(left, mid)`
   - 递归构建右子树：`dfs(mid + 1, right)`

### 关键点

- 选择中间元素作为根节点，保证左右子树高度差不超过 1
- 使用左闭右开区间 `[left, right)` 简化边界处理
- 递归终止条件：`left === right` 表示空区间

- 时间复杂度 $O(n)$，其中 $n$ 是数组长度，每个元素访问一次
- 空间复杂度 $O(\log n)$，递归调用栈的深度
