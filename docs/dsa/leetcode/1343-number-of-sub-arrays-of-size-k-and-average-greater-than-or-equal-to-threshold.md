# 1343. 大小为 K 且平均值大于等于阈值的子数组数目

> 题目链接：<https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/>

## 代码

<<< @/code/dsa/leetcode/1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold.ts

## 思路

使用**滑动窗口**：

- 维护一个长度为 `k` 的窗口，用 `sum` 记录当前窗口的和
- 为了避免浮点数比较，将条件 `sum / k >= threshold` 转换为 `sum >= threshold * k`
- 当窗口大小达到 `k` 时，如果 `sum >= threshold * k`，则计数加一

- 时间复杂度 $O(n)$，只需遍历一次数组
- 空间复杂度 $O(1)$

