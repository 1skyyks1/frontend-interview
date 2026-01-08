/**
 * 744. 寻找比目标字母大的最小字母
 * https://leetcode.cn/problems/find-smallest-letter-greater-than-target/
 */

function nextGreatestLetter(letters: string[], target: string): string {
    let left = -1, right = letters.length;
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);
        if (letters[mid] <= target) {
            left = mid;
        }
        else {
            right = mid;
        }
    }
    return letters[right] ?? letters[0];
}