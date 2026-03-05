# 19. 删除链表的倒数第 N 个结点

> 题目链接：<https://leetcode.cn/problems/remove-nth-node-from-end-of-list/>

## 代码

<<< @/code/dsa/hot/19-remove-nth-node-from-end-of-list.ts

## 思路

使用**快慢指针**（双指针）一次遍历找到倒数第 N 个节点：

1. 创建哑节点 `h` 指向 `head`，避免处理删除头节点的特殊情况
2. 初始化两个指针 `left` 和 `right` 都指向哑节点
3. 让 `right` 指针先向前移动 `n` 步
4. 然后 `left` 和 `right` 同时向前移动，直到 `right.next` 为 `null`
5. 此时 `left` 指向倒数第 N+1 个节点，执行删除操作：`left.next = left.next.next`
6. 返回 `h.next`

### 关键点

- 使用哑节点简化边界处理，统一处理删除头节点的情况
- 快慢指针保持 N 个节点的距离，当快指针到达末尾时，慢指针正好在目标节点的前一个位置
- 只需要一次遍历即可完成

- 时间复杂度 $O(n)$，其中 $n$ 是链表的长度
- 空间复杂度 $O(1)$
