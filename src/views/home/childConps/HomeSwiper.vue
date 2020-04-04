<template>
  <swiper>
    <swiper-item v-for="(banner, index) in banners" :key="index">
      <a :href="banner.link">
        <img :src="banner.image" alt="" @load="swiperLoad">
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
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperLoad() {
        if (!this.isLoad){
          this.$emit('swiperLoadDone')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
