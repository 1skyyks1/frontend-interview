/**
 * 1423. 可获得的最大点数
 * https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/
 */

function maxScore(cardPoints: number[], k: number): number {
    const len = cardPoints.length;
    let total = 0; // cardPoint总和
    let sum = 0; // 当前窗口和
    let res = Infinity; // 窗口最小和
    let window = len - k;
    for (let i = 0; i < len; i++) {
        sum += cardPoints[i];
        total += cardPoints[i];
        if (i - window >= 0) {
            sum -= cardPoints[i - window];
        }
        if (i - window + 1 >= 0) {
            res = Math.min(res, sum);
        }
    }
    return total - res;
}