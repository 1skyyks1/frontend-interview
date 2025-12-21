# 2090. 半径为 k 的子数组平均值

> 题目链接：<https://leetcode.cn/problems/k-radius-subarray-averages/>

## 代码

<<< @/code/dsa/leetcode/2090-k-radius-subarray-averages.ts

## 思路

使用**滑动窗口**：

- 窗口大小为 `2 * k + 1`（左右各 `k` 个元素加上中心元素）
- 维护窗口的和 `sum`，当窗口大小达到 `w` 时，计算平均值并填入结果数组的中心位置 `i - k`
- 对于无法形成完整窗口的位置（数组两端），结果设为 `-1`

- 时间复杂度 $O(n)$，只需遍历一次数组
- 空间复杂度 $O(n)$，需要存储结果数组

