function permute(nums: number[]): number[][] {
    const res = [];
    const len = nums.length;
    const path = new Array(len).fill(0);
    const onPath = new Array(len).fill(false);
    function dfs(i) {
        if (i === len) {
            res.push([...path]);
            return;
        }

        // 遍历所有数找到没用过的
        for (let j = 0; j < len; j++) {
            if (!onPath[j]) {
                path[i] = nums[j];
                onPath[j] = true;
                dfs(i + 1);
                onPath[j] = false;
            }
        }
    }
    dfs(0);
    return res;
};