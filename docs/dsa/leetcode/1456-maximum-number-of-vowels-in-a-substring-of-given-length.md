# 1456. 定长子串中元音的最大数目

> 题目链接：<https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/>

## 代码

<<< @/code/dsa/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length.ts

## 思路

使用**滑动窗口**：

- 维护一个长度为 `k` 的窗口，用 `current` 记录当前窗口内的元音字母数量
- 窗口右移时：如果新字符是元音，`current++`；如果离开窗口的字符是元音，`current--`
- 当窗口大小达到 `k` 时，更新最大元音数量

- 时间复杂度 $O(n)$，只需遍历一次字符串
- 空间复杂度 $O(1)$

