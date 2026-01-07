/**
 * 704. 二分查找
 * https://leetcode.cn/problems/binary-search/
 */

function search(nums: number[], target: number): number {
    let left = -1, right = nums.length;
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid;
        }
        else {
            right = mid;
        }
    }
    return nums[right] === target ? right : -1;
}