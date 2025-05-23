import {
    h,
    render
} from "vue"
export function build_async_dom(component, props) {
    let root = document.createElement('div')
    const vnode = h(component, props);
    // 渲染真实 DOM
    render(vnode, root);
    const result = vnode.el
    // 移除创建的容器元素 避免占用内存
    root = null
    return result
}