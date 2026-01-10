# 1170. 比较字符串最小字母出现频次

> 题目链接：<https://leetcode.cn/problems/compare-strings-by-frequency-of-the-smallest-character/>

## 代码

<<< @/code/dsa/leetcode/1170-compare-strings-by-frequency-of-the-smallest-character.ts

## 思路

### 二分查找 + 排序

本题要求对于 `queries` 中的每个字符串，统计 `words` 中有多少个字符串的 `f` 值大于该查询字符串的 `f` 值。

其中 `f(s)` 定义为字符串 `s` 中按字典序最小的字符的出现频次。

**解法步骤：**

1. 预处理 `words` 数组：
   - 对 `words` 中每个字符串计算其 `f` 值
   - 将所有 `f` 值排序，得到有序数组 `cnts`

2. 处理每个查询：
   - 计算查询字符串的 `f` 值 `cnt`
   - 使用二分查找在 `cnts` 中找到第一个大于 `cnt` 的位置 `right`
   - 从该位置到数组末尾的所有元素都满足条件，个数为 `cnts.length - right`

3. 二分查找细节：
   - 使用开区间 `(left, right)` 进行二分查找
   - 初始化 `left = -1, right = cnts.length`
   - 循环条件：`left + 1 < right`
   - 当 `cnts[mid] <= cnt` 时，目标在右半部分，更新 `left = mid`
   - 否则目标在左半部分，更新 `right = mid`
   - 循环结束时 `right` 指向第一个大于 `cnt` 的位置

- 时间复杂度 $O(n \log n + m \log n)$，其中 $n$ 是 `words` 的长度，$m$ 是 `queries` 的长度
- 空间复杂度 $O(n)$
