<template>
  <swiper>
    <swiper-item v-for="(banner, index) in banners" :key="index">
      <a :href="banner.link">
        <img :src="banner.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
  }
</script>

<style scoped>

</style>
