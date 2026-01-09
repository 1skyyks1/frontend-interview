/**
 * 2389. 和有限的最长子序列
 * https://leetcode.cn/problems/longest-subsequence-with-limited-sum/
 */

function answerQueries(nums: number[], queries: number[]): number[] {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    for (let i = 0; i < queries.length; i++) {
        let left = -1, right = nums.length;
        while (left + 1 < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= queries[i]) {
                left = mid;
            }
            else {
                right = mid;
            }
        }
        queries[i] = right;
    }
    return queries;
}