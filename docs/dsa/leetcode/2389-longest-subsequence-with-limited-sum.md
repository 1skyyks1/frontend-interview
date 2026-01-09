# 2389. 和有限的最长子序列

> 题目链接：<https://leetcode.cn/problems/longest-subsequence-with-limited-sum/>

## 代码

<<< @/code/dsa/leetcode/2389-longest-subsequence-with-limited-sum.ts

## 思路

### 贪心 + 前缀和 + 二分查找

本题要求对于每个查询 `queries[i]`，找出 `nums` 的子序列中元素和不超过 `queries[i]` 的最大长度。

**贪心策略：** 要使子序列长度最大，应该选择尽可能小的元素。因此先对 `nums` 进行排序。

**前缀和优化：** 排序后，可以计算前缀和数组，`nums[i]` 表示前 `i+1` 个元素的和。

**二分查找：** 对于每个查询 `queries[i]`，在前缀和数组中二分查找：
- 找到最后一个满足 `nums[mid] <= queries[i]` 的位置 `left`
- 子序列的最大长度为 `left + 1`（即 `right`）

**实现细节：**
1. 对 `nums` 排序
2. 将 `nums` 转换为前缀和数组
3. 对每个查询，二分查找最后一个 `<= queries[i]` 的位置
4. 结果为该位置 `+ 1`

- 时间复杂度 $O(n \log n + q \log n)$，其中 $n$ 是 `nums` 的长度，$q$ 是查询次数
- 空间复杂度 $O(1)$（原地修改数组）
