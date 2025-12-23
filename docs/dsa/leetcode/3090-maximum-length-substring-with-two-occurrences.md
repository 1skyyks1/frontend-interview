# 3090. 每个字符最多出现两次的最长子字符串

> 题目链接：<https://leetcode.cn/problems/maximum-length-substring-with-two-occurrences/>

## 代码

<<< @/code/dsa/leetcode/3090-maximum-length-substring-with-two-occurrences.ts

## 思路

- 使用滑动窗口 + 计数数组或哈希表，统计当前窗口内每个字符出现次数。
- 右指针进入窗口时，若某字符出现次数超过 2，则不断移动左指针缩小窗口，直到该字符次数不超过 2。
- 在这个过程中维护窗口长度的最大值。
- 时间复杂度 $O(n)$，空间复杂度取决于字符集大小。
