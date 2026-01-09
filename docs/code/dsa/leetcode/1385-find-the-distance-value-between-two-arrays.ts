/**
 * 1385. 两个数组间的距离值
 * https://leetcode.cn/problems/find-the-distance-value-between-two-arrays/
 */

function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    arr2.sort((a, b) => a - b);
    let res = 0;
    for (const num of arr1) {
        let left = -1, right = arr2.length;
        while (left + 1 < right) {
            let mid = Math.floor((left + right) / 2);
            // |x - num| <= d 即 num - d ≤ x ≤ num + d
            // 即需要 arr2 中所有元素都满足 x < num - d 或 x > num + d
            // 找到第一个大于等于num - d元素，判断是否为
            if (arr2[mid] < num - d) {
                left = mid;
            }
            else {
                right = mid;
            }
        }
        // arr2 中所有元素 < num - d或第一个大于等于num - d元素 > num + d
        if (right === arr2.length || arr2[right] > num + d) {
            res++;
        }
    }
    return res;
}