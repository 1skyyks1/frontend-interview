/**
 * 1343. 大小为 K 且平均值大于等于阈值的子数组数目
 * https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold
 */

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    const tk = threshold * k;
    let sum = 0;
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (i - k >= 0) {
            sum -= arr[i - k];
        }
        if (i - k + 1 >= 0 && sum >= tk) {
            res++;
        }
    }
    return res;
}