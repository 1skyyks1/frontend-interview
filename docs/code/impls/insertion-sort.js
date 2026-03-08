// 插入排序
// 第一个为有序，后面一个个向前遍历对比

function insertionSort(arr) {
    let j
    for(let i = 1; i < arr.length; i++) {
        let num = arr[i];
        for(j = i - 1; j >= 0; j--) {
            if(num > arr[j]) break;
            else arr[j + 1] = arr[j];
        }
        arr[j + 1] = num;
    }
}