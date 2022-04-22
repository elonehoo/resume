<script setup lang="ts">
  import {ref} from 'vue'
  import axios from 'axios'
  const date = ref()
  const props = withDefaults(defineProps<{
    url:string
  }>(),{})
  axios.get(props.url).then(res=>{
    date.value = res.data.stargazers_count
  })
</script>

<template>
  <div>
    star: <span>{{date}}</span>
  </div>
</template>

<style scoped>

</style>
