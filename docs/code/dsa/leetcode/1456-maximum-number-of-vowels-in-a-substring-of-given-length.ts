/**
 * 1456. 定长子串中元音的最大数目
 * https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 */

function maxVowels(s: string, k: number): number {
    let res = 0, current = 0;
    for (let i = 0; i < s.length; i++) {
        // 入
        if ('aeiou'.includes(s[i])) {
            current++;
        }

        // 出，i-k为当前要出的，i-k+1是当前最左侧位置
        if (i - k >= 0) {
            const out = s[i - k];
            if ('aeiou'.includes(out)) {
                current--;
            }
        }

        // 窗口左侧位置大于等于0，即已经初始化完成第一个窗口
        if (i - k + 1 >= 0) {
            res = Math.max(res, current);
        }
    }
    return res;
}