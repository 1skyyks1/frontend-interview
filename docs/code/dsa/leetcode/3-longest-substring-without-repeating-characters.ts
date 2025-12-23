/**
 * 3. 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */

function lengthOfLongestSubstring(s: string): number {
    let left = 0; // 窗口左边界
    let res = 0; // 最长无重复子串长度
    const map = new Map<string, number>(); // 字符: 最后一次出现的位置
    for (let right = 0; right < s.length; right++) {
        // 之前出现过 并且在窗口内
        if (map.has(s[right]) && map.get(s[right])! >= left) {
            left = map.get(s[right])! + 1; // 移动左指针跳过该字符
        }
        map.set(s[right], right); // 更新字符出现位置
        res = Math.max(res, right - left + 1); // 当前窗口长度right - left + 1
    }
    return res;
}