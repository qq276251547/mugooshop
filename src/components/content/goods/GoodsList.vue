<template>
  <div class="goods-list">
    <goods-item v-for="(goods, index) in goodsListData"
                :goods-data="goods"
                :key="index"
    />
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";

  export default {
    name: "goodsList",
    components: {
      GoodsItem,
    },
    props: {
      goodsListData: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
  }
</style>
