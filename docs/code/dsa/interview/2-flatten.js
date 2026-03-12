// 对象扁平化：嵌套对象转扁平对象

function flatten(obj) {
    const res = {};
    function dfs(obj, prefix) {
        if(typeof obj === "object" && obj !== null) {
            if(Array.isArray(obj)) { // 数组
                obj.forEach((item, index) => {
                    dfs(item, `${prefix}[${index}]`)
                })
            } else { // 对象
                Object.keys(obj).forEach((key) => {
                    dfs(obj[key], prefix ? `${prefix}.${key}` : key);
                })
            }
        } else { // 基本值
            res[prefix] = obj;
        }
    }
    Object.keys(obj).forEach((key) => {
        dfs(obj[key], key);
    })
    return res;
}

const obj = {
    a: {
        b: {
            c: [1, 4],
            d: 2
        },
        e: 3
    }
};

console.log(flatten(obj));