## 不同浏览器标签页之间如何通信

1. localStorage + storage事件： 浏览器在一个页面修改 localStorage 时，其他同源页面会触发 storage 事件。
```js
localStorage.setItem("follow_123", "1")
window.addEventListener("storage", (e) => {
    if (e.key === "follow_123") {
        update()
    }
})
```
2. BroadcastChannel
```js
const channel = new BroadcastChannel("follow_channel")
channel.postMessage({
    id: 123,
    status: true
})
channel.onmessage = (e) => {
    const { id, status } = e.data
    updateFollowStatus(id, status)
}
```
3. Websocket服务器广播同步
```
page1 点击关注
  ↓
请求服务器
  ↓
服务器通过 websocket 广播
  ↓
page2 接收到更新
```

