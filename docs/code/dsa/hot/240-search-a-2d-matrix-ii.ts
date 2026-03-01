function searchMatrix(matrix: number[][], target: number): boolean {
    let i = 0;
    let j = matrix[0].length - 1;
    while (i <= matrix.length - 1 && j >= 0) {
        if (target === matrix[i][j]) return true;
        else if (target < matrix[i][j]) {
            j--;
        }
        else {
            i++;
        }
    }
    return false;
};