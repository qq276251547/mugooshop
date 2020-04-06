<template>
  <swiper v-if="swiperImgs.length" class="detail-swiper">
    <swiper-item v-for="(swiperImg, index) in swiperImgs" :key="index">
      <img :src="swiperImg" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";

  export default {
    name: "DetailSwiper",
    props: {
      swiperImgs: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      Swiper,
      SwiperItem,
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 50vh;
    overflow: hidden;
  }
</style>
