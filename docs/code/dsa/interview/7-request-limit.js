// 控制并发请求
// 百度二面

// 模拟发送请求接收到数据：返回一个promise，time时间到了，promise完成
function timeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

class SuperTask {
    constructor(maxCount = 2) {
        // 最大并发数量
        this.maxCount = maxCount
        // 请求队列
        this.requestQueue = []
        // 当前正在进行请求的并发数
        this.currentCount = 0
    }
    // 添加任务到请求队列中
    add(task) {
        return new Promise((resolve, reject) => {
            this.requestQueue.push({
                task,
                resolve,
                reject
            })
            // 尝试执行任务
            this.run()
        })
    }
    // 执行任务：判断当前的并发数，执行我们的任务
    run() {
        while (this.currentCount < this.maxCount && this.requestQueue.length !== 0) {
            // 拿出任务
            const { task, resolve, reject } = this.requestQueue.shift()
            this.currentCount++
            // 执行任务，在执行完毕后，需要再次调用run
            task().then(resolve, reject).finally(() => {
                // 任务执行完毕
                this.currentCount--
                this.run()
            })
        }
    }
}

const superTask = new SuperTask(2)

function addTask(time, name) {
    superTask.add(() => timeout(time)).then(() => {
            console.log(`任务${name}完成`)
        })
}