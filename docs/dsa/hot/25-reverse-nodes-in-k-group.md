# 25. K 个一组翻转链表

> 题目链接：<https://leetcode.cn/problems/reverse-nodes-in-k-group/>

## 代码

<<< @/code/dsa/hot/25-reverse-nodes-in-k-group.ts

## 思路

使用**分组反转**的方法，每 K 个节点为一组进行反转：

### 主要步骤

1. 创建哑节点 `dummy` 指向 `head`，简化边界处理
2. 使用 `left` 和 `right` 两个指针标记每组的边界：
   - `left` 指向当前组的前一个节点
   - `right` 向前移动 K 步，指向当前组的最后一个节点
3. 对每一组进行处理：
   - 检查剩余节点是否足够 K 个，不足则停止
   - 保存当前组的起始节点 `start` 和下一组的起始节点 `end`
   - 断开当前组：`right.next = null`
   - 反转当前组：调用 `reverse` 函数
   - 连接反转后的链表：`left.next = 反转后的头节点`，`start.next = end`
   - 更新指针：`left = start`，`right = left`
4. 返回 `dummy.next`

### 辅助函数

`reverse` 函数使用迭代法反转链表：
- 使用 `pre` 和 `now` 两个指针
- 逐个改变节点的 `next` 指向

- 时间复杂度 $O(n)$，其中 $n$ 是链表的长度
- 空间复杂度 $O(1)$
