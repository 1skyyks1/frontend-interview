/**
 * 41. 缺失的第一个正数
 * https://leetcode.cn/problems/first-missing-positive/
 */

// 正数 排序 去重 遍历
function firstMissingPositive(nums: number[]): number {
    nums = nums.filter(item => item > 0).sort((a, b) => a - b);
    nums = Array.from(new Set(nums));
    let a = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== a + 1) {
            return a + 1;
        }
        a++;
    }
    return a + 1;
}

// 根据索引换位置
function firstMissingPositive2(nums: number[]): number {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        // 保证在[1,len]，保证不重复
        while (1 <= nums[i] && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
            const j = nums[i] - 1;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return len + 1;
}