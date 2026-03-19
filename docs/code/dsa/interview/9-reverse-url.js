// www.baidu.com -> com.baidu.www
// 字节一面

function reverseUrl(url) {
    return url.split('.').reverse().join('.');
}

function reverseUrl2(url){ // no reverse
    let arr = url.split('');
    function reverse(s, left, right){
        while(left < right){
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }
    reverse(arr, 0, arr.length - 1);
    let start = 0;
    for(let i = 0; i < arr.length; i++){
        if(i === arr.length || arr[i] === '.'){
            reverse(arr, start, i - 1); // 不包含.
            start = i + 1;
        }
    }
    return arr.join('');
}

console.log(reverseUrl2('www.baidu.com'));