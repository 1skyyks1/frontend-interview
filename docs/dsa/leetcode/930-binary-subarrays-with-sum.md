# 930. 和相同的二元子数组

> 题目链接：<https://leetcode.cn/problems/binary-subarrays-with-sum/>

## 代码

<<< @/code/dsa/leetcode/930-binary-subarrays-with-sum.ts

## 思路

使用**滑动窗口 + 转化思想**求解恰好和为 `goal` 的子数组个数：

**核心思想**：恰好等于 `goal` 的子数组数量 = 小于等于 `goal` 的子数组数量 - 小于等于 `goal - 1` 的子数组数量

对于辅助函数 `solve(nums, goal)`，计算和小于等于 `goal` 的子数组个数：
1. 使用双指针 `left` 和 `i` 维护滑动窗口
2. 用 `sum` 记录当前窗口内的和
3. 当 `sum > goal` 时，收缩左边界直到 `sum <= goal`
4. 此时以 `i` 为右端点的所有合法子数组数量为 `i - left + 1`（包含 `[left, i]`, `[left+1, i]`, ..., `[i, i]`）

通过两次调用 `solve`，即可得到恰好等于 `goal` 的子数组个数。

- 时间复杂度 $O(n)$，其中 $n$ 为数组长度
- 空间复杂度 $O(1)$
