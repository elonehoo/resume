<script setup lang="ts">

</script>

<template>
  <div class="container">
111
  </div>
</template>

<style scoped>
.container{
  display: grid;
  grid-template-columns: auto 15fr 50fr auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 768px){
  .container{
    width: 750px;
  }
}
</style>
