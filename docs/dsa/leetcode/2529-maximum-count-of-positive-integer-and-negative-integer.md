# 2529. 正整数和负整数的最大计数

> 题目链接：<https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer/>

## 代码

<<< @/code/dsa/leetcode/2529-maximum-count-of-positive-integer-and-negative-integer.ts

## 思路

### 二分查找

本题要求在有序数组中分别统计正整数和负整数的个数，返回较大值。

使用两次二分查找：

**第一次查找：统计正整数个数**
- 找到第一个 `> 0` 的位置 `right`
- 正整数个数 = `nums.length - right`

**第二次查找：统计负整数个数**
- 找到第一个 `>= 0` 的位置 `right`
- 负整数个数 = `right`（因为负数都在这个位置之前）

最后返回两者的最大值。

- 时间复杂度 $O(\log n)$
- 空间复杂度 $O(1)$
