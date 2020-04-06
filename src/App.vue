<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- 底部切换栏 -->
    <main-tab-bar v-if="$route.meta.showTab" class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTabbar/MainTabBar";

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
