# 48. 旋转图像

> 题目链接：<https://leetcode.cn/problems/rotate-image/>

## 代码

<<< @/code/dsa/leetcode/48-rotate-image.ts

## 思路

将矩阵顺时针旋转 90° 可以分解为两个步骤：

1. **转置矩阵**：将矩阵沿主对角线翻转，即 `matrix[i][j]` 与 `matrix[j][i]` 互换
   - 只需遍历上三角部分（`j > i`），避免重复交换
2. **左右翻转**：对每一行进行左右翻转（`reverse`）

通过这两步操作，就能实现原地旋转。

- 时间复杂度 $O(n^2)$，其中 $n$ 为矩阵的边长
- 空间复杂度 $O(1)$，原地修改矩阵
