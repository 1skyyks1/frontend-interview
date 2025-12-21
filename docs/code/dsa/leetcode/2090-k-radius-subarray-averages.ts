/**
 * 2090. 半径为 k 的子数组平均值
 * https://leetcode.cn/problems/k-radius-subarray-averages/
 */

function getAverages(nums: number[], k: number): number[] {
    // 窗口大小左右各k个+自身
    const w = 2 * k + 1;
    const len = nums.length;
    const res = new Array(len).fill(-1);
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        // 如窗口大小超过 w，则移除最左侧的元素
        if (i - w >= 0) {
            sum -= nums[i - w];
        }
        // 当窗口大小刚好达到 w 时，开始计算平均值
        if (i - w + 1 >= 0) {
            // 窗口中心位置是 i - k
            res[i - k] = Math.floor(sum / w)
        }
    }
    return res;
}