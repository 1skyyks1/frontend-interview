// 选择排序
// 每次找到未排序部分的最小值，然后放到已排序部分的末尾

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        // 最后一个元素不用管
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
}