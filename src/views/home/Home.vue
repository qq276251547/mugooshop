<template>
  <div>
    <nav-bar class="nav-bar"><div slot="nav-center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>



  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childConps/HomeSwiper";

  import {getMultiData} from "network/home";

  export default {
    name: "Home",
    data(){
      return {
        banners: []
      }
    },

    components: {
      NavBar,
      HomeSwiper
    },

    mounted() {
      this.getHomeMultiData()
    },

    methods: {
      /**
       * 网络请求数据方法
       */
      getHomeMultiData() {
        getMultiData().then(res => {
          this.banners = res.data.banner.list
        })
      }
    },

  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
