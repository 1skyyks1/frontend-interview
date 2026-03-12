// 实现一个函数groupBy(arr, key),按照key对数组arr进行分组。
// 腾讯PCG一面

function groupBy(arr, key) {
    const res = {};
    for(const item of arr) {
        const val = item[key];
        if(!res[val]){
            res[val] = []
        }
        res[val].push(item);
    }
    return res;
}

const data = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 22 }
];
console.log(groupBy(data, "age"));