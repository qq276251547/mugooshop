<template>
  <div class="goods-item" @click="goodClick(goodsData.iid)">
    <img :src="goodsData.show.img" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsData.title}}</p>
      <span class="price">{{goodsData.price}}</span>
      <span class="collect">{{goodsData.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsListItem",
    props: {
      goodsData: {
        type: Object,
        default: {}
      }
    },
    methods: {
      imgLoad(){
        this.$bus.$emit('imageLoadFinish')
      },

      goodClick(goodId){
        console.log(goodId)
        this.$router.push({
          path: 'detail',
          query: {
            iid: goodId
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    padding-bottom: 40px;
    position: relative;

  }

  .goods-item img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.5);
  }

  .goods-info {
    font-size: 12px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    overflow: hidden;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 25px;
  }

  .goods-info .price:before {
    color: var(--color-high-text);
    content: '￥';
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -13px;
    top: 0;
    width: 12px;
    height: 12px;
    background: url("~assets/img/common/collect.svg") 0 0/12px 12px;
  }

</style>
