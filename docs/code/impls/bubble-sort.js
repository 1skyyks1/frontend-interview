// 冒泡排序
// 比较相邻的元素。如果第一个比第二个大，就交换它们两个。

function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            // 每一轮把一个最大值冒泡到最右边，所以右边已经排好的元素数量 = i
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}