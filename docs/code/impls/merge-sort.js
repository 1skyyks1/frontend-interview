// 归并排序
// 一直二分，再比较排序

function mergeSort(arr){
    function merge(left, right){
        let result = [];
        while(left.length && right.length){
            if(left[0] < right[0]){
                result.push(left.shift());
            }
            else{
                result.push(right.shift());
            }
        }
        while(left.length){ //此处把剩下的部分直接放进result
            result.push(left.shift());
        }
        while(right.length){
            result.push(right.shift());
        }
        return result; //可以直接result.concat(left, right)
    }
    let len = arr.length;
    if(len === 1){
        return arr;
    }
    let mid = len >> 1; // Math.floor(len / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}