<template>
  <div>
    <h2>我是分类</h2>

    <div>
      <pulling-word :loadingWord="beforePullUpWord"></pulling-word>
      <loading :loadingWord="PullingUpWord"></loading>
    </div>
  </div>
</template>

<script>
  import Loading from "components/common/loading/loading";
  import PullingWord from "components/common/loading/pulling-word";

  const  PullingUpWord="正在拼命加载中...";
  const  beforePullUpWord="上拉加载更多";
  const  finishPullUpWord="加载完成";

  export default {
    name: "Category",
    data(){
      return {
        beforePullUpWord,
        PullingUpWord,
      }
    },
    components: {
      Loading,
      PullingWord
    }
  }
</script>

<style scoped>

</style>
