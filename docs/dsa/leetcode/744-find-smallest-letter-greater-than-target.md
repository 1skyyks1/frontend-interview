# 744. 寻找比目标字母大的最小字母

> 题目链接：<https://leetcode.cn/problems/find-smallest-letter-greater-than-target/>

## 代码

<<< @/code/dsa/leetcode/744-find-smallest-letter-greater-than-target.ts

## 思路

### 二分查找

本题要求在有序字母数组中找到比目标字母大的最小字母，使用二分查找。

使用开区间 `(left, right)` 进行二分查找：

- 初始化 `left = -1, right = letters.length`
- 循环条件：`left + 1 < right`
- 当 `letters[mid] <= target` 时，说明答案在右半部分，更新 `left = mid`
- 否则答案在左半部分（包括 mid），更新 `right = mid`
- 循环结束时 `right` 指向第一个 `> target` 的位置
- 如果 `right` 越界（所有字母都 `<= target`），则返回 `letters[0]`（题目要求循环）

- 时间复杂度 $O(\log n)$
- 空间复杂度 $O(1)$
