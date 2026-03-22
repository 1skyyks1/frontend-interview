function subsets(nums: number[]): number[][] {
    const res = [];
    const len = nums.length;
    const path = [];
    function dfs(i) {
        res.push([...path]);

        for (let j = i; j < len; j++) {
            path.push(nums[j])
            dfs(j + 1);
            path.pop()
        }
    }
    dfs(0);
    return res;
};