// 手写深拷贝

function deepClone(obj, map = new WeakMap()) {
    if(typeof obj !== 'object' || obj === null) return obj;
    if(map.has(obj)) return map.get(obj);
    let res = Array.isArray(obj) ? [] : {};
    map.set(obj, res);
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key], map);
        }
    }
    return res;
}