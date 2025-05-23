# 在 vue 中使用高德和百度 同时可以使用vue 的动态渲染

在开发大屏项目时，常常会遇到十分复杂的的打点或信息窗，如果按照 API 文档中的自定义代码，需要写大量的 js 和 html。于是就有了一个想法，能不能使用 vue 的组件呢。
[完整代码地址](https://github.com/AiFu-o/quick-map-point)
## 实现思路
 1. 首先需要构建虚拟 dom，并传入动态组件
 2. 将虚拟 dom 渲染成真实 dom，并获取到真实 dom 
 3. 通过真实 dom 直接渲染 marker 或 window
## 代码实现
### Vue2
```javascript
build_async_dom(component, props) {
    // ​​动态创建一个 Vue 组件
    const tipComponent = Vue.extend({
        render: (h) =>
            h(component, {
                props
            }),
    })
    // 将组件渲染成真实 dom
    const realDom = new tipComponent().$mount()
    // 获取并返回 dom
    return realDom.$el
}
```
### Vue3
```javascript
build_async_dom(component, props) {
    let root = document.createElement('div')
    // ​​动态创建一个 Vue 组件
    const vnode = h(component, props);
    // 渲染真实 DOM
    render(vnode, root);
    const result = vnode.el
    // 移除创建的容器元素 避免占用内存
    root = null
    return result
}
```
### 在地图中应用(以高德地图为例)
```javascript
	let marker = new AMap.Marker({
        position: [116.397428, 39.90923],
        content: build_async_dom(testComp, { name: testProps }),
       	offset: new AMap.Pixel(-100, -60),
    })
    map.add(marker)
```
