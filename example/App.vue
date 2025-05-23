<style>
.root,
#app {
    width: 100%;
    height: 100%;
}
html,
body {
    height: 100%;
    margin: 0;
    overflow: hidden;
}
</style>
<template>
    <div id="container" class="root"></div>
</template>
<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted, createApp, ref } from 'vue'
import testComp from './test-comp.vue'
import { build_async_dom } from '../libs/map-point-v3'
var map
const testProps = ref(123)
onMounted(() => {
    AMapLoader.load({
        key: 'e47e0b813d3b2055732932705a3e847e',
        version: '2.0',
        AMapUI: {
            version: '1.1',
        },
    })
        .then((AMap) => {
            map = new AMap.Map('container')
            initMarker()
        })
        .catch((e) => {
            console.error(e)
        })
})
const initMarker = () => {
    let marker = new AMap.Marker({
        position: [116.397428, 39.90923],
        content: build_async_dom(testComp, { name: testProps }),
        offset: new AMap.Pixel(-100, -60),
    })
    map.add(marker)
}
</script>
