function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    // words → 计算 f → 排序
    const cnts = words.map(f).sort((a, b) => a - b);
    const res = [];
    // queries → 计算 f → 二分查找 → 统计个数
    for (const q of queries) {
        const cnt = f(q);
        let left = -1, right = cnts.length;
        // 找第一个 > cnt 的位置
        while (left + 1 < right) {
            let mid = Math.floor((left + right) / 2);
            if (cnts[mid] <= cnt) {
                left = mid;
            }
            else {
                right = mid;
            }
        }
        res.push(cnts.length - right);
    }
    return res;
}

function f(s: string): number {
    // 可以不用数组，仅记录最小字母和其频次
    const cnt = new Array(26).fill(0);
    for (const c of s) {
        cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return cnt.find(x => x > 0);
}