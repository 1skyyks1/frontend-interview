function isValid(s: string): boolean {
    const arr = new Array();
    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        if(cur === ')' || cur === ']' || cur === '}'){
            const left = arr.pop();
            if((left === '(' && cur === ')') ||
            (left === '[' && cur === ']') || 
            (left === '{' && cur === '}')){
                continue;
            } else return false;
        }
        else{
            arr.push(s[i])
        }
    }
    if(arr.length !== 0) return false;
    return true;
};

function isValid2(s: string): boolean {
    const arr = new Array()
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for(const char of s){
        if(map[char]){
            const left = arr.pop();
            if(left !== map[char]) return false;
        } else arr.push(char);
    }
    if(arr.length !== 0) return false;
    return true;
}