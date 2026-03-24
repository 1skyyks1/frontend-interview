function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const left = target - nums[i];
        if(map.has(left)) return [i, map.get(left)]
        map.set(nums[i], i);
    }
};