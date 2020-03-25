<template>
  <div class="nav-bar">
    <div class="left"><slot name="nav-left"></slot></div>
    <div class="center"><slot name="nav-center"></slot></div>
    <div class="right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    z-index: 10;
  }

  .center{
    flex: 1;
  }

  .left{
    width: 60px;
  }

  .right{
    width: 60px;
  }

</style>
