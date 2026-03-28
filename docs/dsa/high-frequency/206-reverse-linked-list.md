# 206. 反转链表

> 题目链接：<https://leetcode.cn/problems/reverse-linked-list/>

## 代码

<<< @/code/dsa/high-frequency/206-reverse-linked-list.ts

## 思路

使用**迭代法**反转链表：

1. 初始化三个指针：
   - `prev = null`：指向前一个节点
   - `now = head`：指向当前节点
   - `next`：临时保存下一个节点

2. 遍历链表，对每个节点进行操作：
   - 保存当前节点的下一个节点：`next = now.next`
   - 反转当前节点的指针：`now.next = prev`
   - 移动 `prev` 和 `now` 指针：`prev = now`, `now = next`

3. 当 `now` 为 `null` 时，`prev` 就是新的头节点

这个算法通过改变每个节点的 `next` 指针方向来实现链表反转，是最经典的链表反转方法。

- 时间复杂度 $O(n)$，其中 $n$ 是链表的长度
- 空间复杂度 $O(1)$
