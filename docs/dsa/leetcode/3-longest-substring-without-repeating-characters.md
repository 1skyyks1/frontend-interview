# 3. 无重复字符的最长子串

> 题目链接：<https://leetcode.cn/problems/longest-substring-without-repeating-characters/>

## 代码

<<< @/code/dsa/leetcode/3-longest-substring-without-repeating-characters.ts

## 思路

- 使用滑动窗口 + 哈希表（或 `Map`）记录每个字符上一次出现的位置。
- 右指针向右移动，遇到重复字符时，将左指针移动到该字符上次出现位置的下一位，以保证窗口内没有重复字符。
- 每次更新窗口长度的最大值。
- 时间复杂度 $O(n)$，空间复杂度 $O(1)$，其中 $n$ 为字符串长度，字符集大小有限。
