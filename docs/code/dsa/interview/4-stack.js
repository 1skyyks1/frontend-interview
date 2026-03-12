// 实现栈push/pop/getMin等方法
// 腾讯一面

class Stack{
    constructor(){
        this.stack = [];
        this.minStack = [];
    }

    push(x){
        this.stack.push(x);
        if(this.minStack.length === 0 || x <= this.getMin()){
            this.minStack.push(x);
        }
    }

    pop(){
        const val = this.stack.pop();
        if(val === this.getMin()){
            this.minStack.pop();
        }
    }

    top(){
        return this.stack[this.stack.length - 1];
    }

    getMin(){
        return this.minStack[this.minStack.length - 1];
    }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(2);
console.log(stack.getMin()); // 2
stack.pop();
console.log(stack.getMin()); // 3
console.log(stack.top());    // 5