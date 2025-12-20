/**
 * 643. 子数组最大平均数 I
 * https://leetcode.cn/problems/maximum-average-subarray-i/
 */

function findMaxAverage(nums: number[], k: number): number {
    let res = -Infinity, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i - k >= 0) {
            sum -= nums[i - k];
        }
        if (i - k + 1 >= 0) {
            res = Math.max(res, sum);
        }
    }
    return res / k;
}