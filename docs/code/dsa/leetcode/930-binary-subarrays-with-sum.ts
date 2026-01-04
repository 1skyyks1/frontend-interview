/**
 * 930. 和相同的二元子数组
 * https://leetcode.cn/problems/binary-subarrays-with-sum/
 */

function numSubarraysWithSum(nums: number[], goal: number): number {
    // 恰好等于goal的数量 = 大于goal的数量 - 大于goal - 1的数量
    return solve(nums, goal) - solve(nums, goal - 1);
}

function solve(nums: number[], goal: number): number {
    if (goal < 0) return 0;
    let left = 0;
    let res = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum > goal) {
            sum -= nums[left];
            left++;
        }
        res += i - left + 1;
    }
    return res;
}