// 数组三等分，返回下标
// 腾讯WXG一面

const arr = [1, 2, 3, 4, 5, 6, 7]

function splitThree(arr){
    const len = arr.length;
    const size = Math.floor(len / 3);
    const re = len % 3;
    const result = [];
    let start = 0;
    for(let i = 0; i < 3; i++){
        const partSize = size + (i < re ? 1 : 0)
        const end = start + partSize - 1;
        result.push([start, end]);
        start += partSize;
    }
    return result;
}

console.log(splitThree(arr));