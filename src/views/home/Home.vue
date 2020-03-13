<template>
  <div>
    <h2>我是首页</h2>
    <swiper>
      <swiper-item v-for="(banner, index) in banners" :key="index">
        <a :href="banner.link">
          <img :src="banner.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";

  import {request} from "network/request";

  export default {
    name: "Home",
    data(){
      return {
        banners: []
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    mounted() {
      request({
        method: 'get',
        url: 'home/multidata'
      }).then(res => {
        this.banners = res.data.banner.list
      })
    }
  }
</script>

<style scoped>

</style>
