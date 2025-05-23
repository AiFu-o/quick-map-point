import Vue from "vue"
export function build_async_dom(component, props) {
    const tipComponent = Vue.extend({
        render: (h) =>
            h(component, {
                props
            }),
    })
    return new tipComponent().$mount().$el
}