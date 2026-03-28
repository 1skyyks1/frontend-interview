function compareVersion(version1: string, version2: string): number {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    const len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
        let num1 = arr1[i] ? parseInt(arr1[i]) : 0;
        let num2 = arr2[i] ? parseInt(arr2[i]) : 0;
        if (num1 > num2) return 1;
        else if (num1 < num2) return -1;
    }
    return 0;
};

function compareVersionNoSplit(version1: string, version2: string): number {
    let i = 0, j = 0;
    while(i < version1.length || j < version2.length){
        let num1 = 0, num2 = 0;
        while(i < version1.length && version1[i] !== '.'){
            num1 = num1 * 10 + parseInt(version1[i]);
            i++;
        }
        while(j < version2.length && version2[j] !== '.'){
            num2 = num2 * 10 + parseInt(version2[j]);
            j++
        }
        i++;
        j++;
        if (num1 > num2) return 1;
        else if (num1 < num2) return -1;
    }
    return 0;
};