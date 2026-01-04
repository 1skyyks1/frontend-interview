# 1248. 统计「优美子数组」

> 题目链接：<https://leetcode.cn/problems/count-number-of-nice-subarrays/>

## 代码

<<< @/code/dsa/leetcode/1248-count-number-of-nice-subarrays.ts

## 思路

使用**滑动窗口 + 转化思想**求解恰好包含 `k` 个奇数的子数组个数：

**核心思想**：恰好包含 `k` 个奇数的子数组数量 = 最多包含 `k` 个奇数的子数组数量 - 最多包含 `k - 1` 个奇数的子数组数量

对于辅助函数 `sub(nums, k)`，计算最多包含 `k` 个奇数的子数组个数：
1. 使用双指针 `left` 和 `i` 维护滑动窗口
2. 用 `cnt` 记录当前窗口内奇数的个数（通过 `nums[i] % 2 === 1` 判断）
3. 当 `cnt > k` 时，收缩左边界直到 `cnt <= k`
4. 此时以 `i` 为右端点的所有合法子数组数量为 `i - left + 1`

通过两次调用 `sub`，即可得到恰好包含 `k` 个奇数的子数组个数。

这个解法与 [930. 和相同的二元子数组](/dsa/leetcode/930-binary-subarrays-with-sum) 采用了相同的思路。

- 时间复杂度 $O(n)$，其中 $n$ 为数组长度
- 空间复杂度 $O(1)$
