/**
 * 3090. 每个字符最多出现两次的最长子字符串
 * https://leetcode.cn/problems/maximum-length-substring-with-two-occurrences/
 */

function maximumLengthSubstring(s: string): number {
    let left = 0;
    let res = 0;
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        const si = s[i];
        map.set(si, (map.get(si) || 0) + 1);
        while (map.get(si)! > 2) {
            map.set(s[left], map.get(s[left])! - 1);
            left++;
        }
        res = Math.max(res, i - left + 1);
    }
    return res;
}