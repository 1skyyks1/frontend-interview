// 数组去重，多种方法
// 腾讯一面

const arr = [1, 2, 3, 3, 4, 4, 5]

// 1. Set
let uniqueArr1 = [...new Set(arr)];
console.log(uniqueArr1);

// 2. includes
let uniqueArr2 = [];
for(const num of arr){
    if(!uniqueArr2.includes(num)){
        uniqueArr2.push(num);
    }
}
console.log(uniqueArr2);

// 3. filter + indexOf
let uniqueArr3 = arr.filter((num,index) => arr.indexOf(num) === index);
console.log(uniqueArr3);

// 4. Map
const map = new Map();
for(const num of arr){
    map.set(num, 1);
}
let uniqueArr4 = [...map.keys()];
console.log(uniqueArr4);