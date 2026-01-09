# 1385. 两个数组间的距离值

> 题目链接：<https://leetcode.cn/problems/find-the-distance-value-between-two-arrays/>

## 代码

<<< @/code/dsa/leetcode/1385-find-the-distance-value-between-two-arrays.ts

## 思路

### 二分查找

本题要求统计 `arr1` 中有多少个元素满足：该元素与 `arr2` 中所有元素的绝对差都大于 `d`。

对于 `arr1` 中的每个元素 `num`，如果 `|num - x| > d` 对所有 `arr2` 中的元素 `x` 成立，则该元素符合要求。

等价于：`arr2` 中所有元素 `x` 都满足 `x < num - d` 或 `x > num + d`。

**解法步骤：**

1. 对 `arr2` 进行排序，使其有序
2. 对 `arr1` 中的每个元素 `num`���使用二分查找：
   - 找到 `arr2` 中第一个 `>= num - d` 的位置 `right`
   - 如果 `right === arr2.length`（所有元素都 `< num - d`），或者 `arr2[right] > num + d`（第一个满足的元素已经 `> num + d`），则该元素符合要求
3. 统计符合要求的元素个数

- 时间复杂度 $O(n \log n + m \log n)$，其中 $n$ 是 `arr2` 的长度，$m$ 是 `arr1` 的长度
- 空间复杂度 $O(1)$
