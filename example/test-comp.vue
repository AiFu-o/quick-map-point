<template>
    <div>这是一个图标{{ props.name }}</div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    name: String,
})
</script>