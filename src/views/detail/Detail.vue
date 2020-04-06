<template>
  <div>
    <detail-nav-bar :titles="this.titles"/>
    <detail-swiper :swiper-imgs="topImages"/>
  </div>
</template>

<script>
  import {getGoodDetail} from "network/detail";

  import DetailNavBar from "./childConps/DetailNavBar";
  import DetailSwiper from "./childConps/DetailSwiper";

  export default {
    name: "Detail",
    data() {
      return {
        goodId: '',
        titles: ['商品', '参数', '评论', '推荐'],
        topImages: []
      }
    },

    components: {
      DetailNavBar,
      DetailSwiper,
    },

    created() {
      console.log("创建detail页面");
      this.goodId = this.$route.query.iid
      this.getGoodDetailById(this.goodId)
    },

    methods: {

      /**
       * 请求网络数据
       */
      getGoodDetailById(goodId) {
        getGoodDetail(goodId).then(res => {
          console.log(res)
          const detailObj = res.result

          //1.获取详情页商品轮播图数据
          this.topImages = detailObj.itemInfo.topImages
          console.log(this.topImages)

        })
      }
    },

  }
</script>

<style scoped>

</style>
