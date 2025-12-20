# 643. 子数组最大平均数 I

> 题目链接：<https://leetcode.cn/problems/maximum-average-subarray-i/>

## 代码

<<< @/code/dsa/leetcode/643-maximum-average-subarray-i.ts

## 思路

使用**滑动窗口**的思想：

- 维护一个长度为 `k` 的窗口，用 `sum` 记录当前窗口的和
- 当窗口右移时，加上新元素，减去离开窗口的元素
- 当窗口大小达到 `k` 时，更新最大平均值

- 时间复杂度 $O(n)$，只需遍历一次数组
- 空间复杂度 $O(1)$

