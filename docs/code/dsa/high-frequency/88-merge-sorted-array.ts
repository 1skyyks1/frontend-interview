/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1, p2 = n - 1, p = m + n - 1;
    while (p1 >= 0 && p2 >= 0) {
        if (nums2[p2] > nums1[p1]) {
            nums1[p] = nums2[p2];
            p--;
            p2--;
        } else {
            nums1[p] = nums1[p1];
            p--;
            p1--;
        }
    }
    while(p2 >= 0){
        nums1[p] = nums2[p2];
        p--;
        p2--;
    }
};