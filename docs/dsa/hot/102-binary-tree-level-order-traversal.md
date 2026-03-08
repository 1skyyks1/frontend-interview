# 102. 二叉树的层序遍历

> 题目链接：<https://leetcode.cn/problems/binary-tree-level-order-traversal/>

## 代码

<<< @/code/dsa/hot/102-binary-tree-level-order-traversal.ts

## 思路

使用**队列**实现二叉树的层序遍历（BFS）：

1. 初始化：
   - 如果根节点为空，返回空数组
   - 创建结果数组和队列，将根节点入队
2. 层序遍历：
   - 记录当前层的节点数量 `size`
   - 遍历当前层的所有节点：
     - 出队节点，将值加入当前层数组
     - 将左右子节点入队
   - 将当前层数组加入结果

### 关键点

- 使用队列实现 BFS，先进先出
- 通过记录每层的节点数量来分层
- 使用 `queue.shift()` 出队，`queue.push()` 入队

- 时间复杂度 $O(n)$，其中 $n$ 是节点数量
- 空间复杂度 $O(n)$，队列最多存储一层的节点
