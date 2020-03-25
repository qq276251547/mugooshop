<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部切换栏 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "components/content/maintabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
  @import "assets/css/base.css";


</style>
