// 快速排序
// 选择一个基准元素，遍历与其对比
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const num = arr[0];
    const left = [];
    const right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > num){
            right.push(arr[i]);
        }
        else{
            left.push(arr[i])
        }
    }
    return [...quickSort(left), num, ...quickSort(right)]
}