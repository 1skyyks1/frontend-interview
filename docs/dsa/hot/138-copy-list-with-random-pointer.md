# 138. 随机链表的复制

> 题目链接：<https://leetcode.cn/problems/copy-list-with-random-pointer/>

## 代码

<<< @/code/dsa/hot/138-copy-list-with-random-pointer.ts

## 思路

使用**哈希表**建立原节点和新节点的映射关系：

### 第一次遍历：创建所有新节点

1. 遍历原链表，为每个节点创建对应的新节点
2. 将原节点和新节点的映射关系存入 `Map`
3. 此时新节点只有 `val`，`next` 和 `random` 都未设置

### 第二次遍历：建立指针关系

1. 再次遍历原链表
2. 通过 `Map` 找到当前节点对应的新节点
3. 设置新节点的 `next` 和 `random` 指针：
   - `map.get(now).next = map.get(now.next) ?? null`
   - `map.get(now).random = map.get(now.random) ?? null`
4. 使用 `??` 运算符处理 `null` 的情况

### 关键点

- 使用哈希表存储原节点到新节点的映射
- 分两次遍历：第一次创建节点，第二次建立关系
- 避免了复杂的指针操作，思路清晰

- 时间复杂度 $O(n)$，其中 $n$ 是链表的长度
- 空间复杂度 $O(n)$，哈希表存储所有节点
