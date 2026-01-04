/**
 * 54. 螺旋矩阵
 * https://leetcode.cn/problems/spiral-matrix/
 */

function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length;
    const n = matrix[0].length;
    const len = m * n;
    const res: number[] = new Array(len).fill(0);
    const visited: boolean[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const directions = [ // 螺旋前进方向
        [0, 1],   // →
        [1, 0],   // ↓
        [0, -1],  // ←
        [-1, 0]   // ↑
    ];
    let di = 0; // directions的index，记录方向
    let row = 0, col = 0;
    for (let i = 0; i < len; i++) {
        res[i] = matrix[row][col];
        visited[row][col] = true;
        // 尝试下一步
        const nextRow = row + directions[di][0], nextCol = col + directions[di][1];
        // 越界或已访问，则变向
        if (nextRow < 0 || nextRow >= m ||
            nextCol < 0 || nextCol >= n ||
            visited[nextRow][nextCol]) {
            di = (di + 1) % 4;
        }
        // 真正走一步
        row += directions[di][0];
        col += directions[di][1];
    }
    return res;
}