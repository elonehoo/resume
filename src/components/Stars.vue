<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const props = withDefaults(defineProps<{
  url: string
}>(), {})
const date = ref()
axios.get(props.url).then((res) => {
  date.value = res.data.stargazers_count
})
</script>

<template>
  <div>
    star: <span>{{ date }}</span>
  </div>
</template>

<style scoped>

</style>
