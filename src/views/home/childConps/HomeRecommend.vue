<template>
  <div class="recommend-container">
    <div class="recommend-item" v-for="(recommend, index) in this.recommends" :key="index">
      <a :href="recommend.link">
        <img :src="recommend.image" alt="">
        <div>{{recommend.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .recommend-container {
    display: flex;
    font-size: 14px;
    padding: 10px 0 15px;
    border-bottom: #efefef 3px solid;
    box-shadow: 0 0 10px rgba(100, 100, 100, .1);
  }

  .recommend-item {
    flex: 1;
    text-align: center;
  }

  .recommend-container img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
