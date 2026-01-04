/**
 * 48. 旋转图像
 * https://leetcode.cn/problems/rotate-image/
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // 转置
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
        // 左右翻转
        matrix[i].reverse();
    }
}