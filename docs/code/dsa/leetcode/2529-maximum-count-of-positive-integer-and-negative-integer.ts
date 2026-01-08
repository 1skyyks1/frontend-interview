/**
 * 2529. 正整数和负整数的最大计数
 * https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer/
 */

function maximumCount(nums: number[]): number {
    let left = -1, right = nums.length;
    // 找到第一个大于0的位置
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] <= 0) {
            left = mid;
        }
        else {
            right = mid;
        }
    }
    const pos = nums.length - right;
    left = -1;
    right = nums.length;
    // 找到第一个大于等于0的位置，即为负数数量
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < 0) {
            left = mid;
        }
        else {
            right = mid;
        }
    }
    return Math.max(pos, right);
}