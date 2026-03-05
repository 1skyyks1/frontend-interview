function jsonStringify(val) {
    const type = typeof val;

    if(type === "number" || type === "boolean" || val === null) {
        return String(val);
    }

    if(type === "string"){
        return `"${val}"`;
    }

    if(Array.isArray(val)) {
        return "[" + val.map((item) => jsonStringify(item)).join(',') + "]";
    }

    if(type === "object") {
        const result = [];
        for(let key in val) {
            if(Object.prototype.hasOwnProperty.call(val, key)) {
                if(val[key] !== undefined) {
                    result.push('"' + key + '":'+ jsonStringify(val[key]));
                }
            }
        }
        return "{" + result.join(',') + "}";
    }
}