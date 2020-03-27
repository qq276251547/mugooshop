<template>
  <div class="backtop-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .backtop-container img{
    width: 43px;
    height: 43px;
  }
</style>
