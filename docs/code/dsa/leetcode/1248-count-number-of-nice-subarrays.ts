/**
 * 1248. 统计「优美子数组」
 * https://leetcode.cn/problems/count-number-of-nice-subarrays/
 */

function numberOfSubarrays(nums: number[], k: number): number {
    return sub(nums, k) - sub(nums, k - 1);
}

function sub(nums: number[], k: number): number {
    if (k < 0) return 0;
    let left = 0;
    let cnt = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            cnt++;
        }
        while (cnt > k) {
            if (nums[left] % 2 === 1) {
                cnt--;
            }
            left++;
        }
        res += i - left + 1;
    }
    return res;
}