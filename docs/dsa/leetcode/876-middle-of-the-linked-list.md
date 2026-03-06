# 876. 链表的中间结点

> 题目链接：<https://leetcode.cn/problems/middle-of-the-linked-list/>

## 代码

<<< @/code/dsa/leetcode/876-middle-of-the-linked-list.ts

## 思路

使用**快慢指针**找到链表的中间节点：

1. 初始化两个指针 `slow` 和 `fast` 都指向 `head`
2. 遍历链表：
   - 慢指针每次移动一步：`slow = slow.next`
   - 快指针每次移动两步：`fast = fast.next.next`
3. 当快指针到达链表末尾时，慢指针正好在中间位置
4. 返回慢指针

### 关键点

- 快指针速度是慢指针的 2 倍，当快指针到达末尾时，慢指针在中间
- 如果链表长度为偶数，返回中间两个节点的后一个（符合题目要求）
- 循环条件 `fast && fast.next` 确保快指针不会越界

- 时间复杂度 $O(n)$，其中 $n$ 是链表的长度
- 空间复杂度 $O(1)$
