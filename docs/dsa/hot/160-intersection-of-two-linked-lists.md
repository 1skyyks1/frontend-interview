# 160. 相交链表

> 题目链接：<https://leetcode.cn/problems/intersection-of-two-linked-lists/>

## 代码

<<< @/code/dsa/hot/160-intersection-of-two-linked-lists.ts

## 思路

使用**双指针**的巧妙做法：

- 让两个指针 `pA` 和 `pB` 分别从 `headA` 和 `headB` 开始遍历
- 当 `pA` 走到链表 A 的末尾时，让它从 `headB` 开始继续走
- 当 `pB` 走到链表 B 的末尾时，让它从 `headA` 开始继续走
- 如果两个链表相交，那么两个指针最终会在相交节点相遇
- 如果不相交，两个指针最终都会走到 `null`

这个算法的核心思想是：让两个指针走过的路径长度相同（A + B = B + A），这样如果有相交点，它们一定会在相交点相遇。

- 时间复杂度 $O(m + n)$，其中 $m$ 和 $n$ 分别是两个链表的长度
- 空间复杂度 $O(1)$