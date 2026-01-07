/**
 * 35. 搜索插入位置
 * https://leetcode.cn/problems/search-insert-position/
 */

function searchInsert(nums: number[], target: number): number {
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
    return right;
}