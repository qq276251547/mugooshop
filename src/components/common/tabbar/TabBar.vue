<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #efefef;
    box-shadow: 0 -1px 15px rgba(100, 100, 100, .3);
  }


</style>
