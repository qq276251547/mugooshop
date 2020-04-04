<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
      <div>
        <loading v-show="isPullUp" :loadingWord="PullingUpWord"></loading>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Loading from "components/common/loading/loading"

  const  PullingUpWord="正在拼命加载中...";

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      isPullingUp: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroller: {},
        isPullUp: false,
        PullingUpWord,
      }
    },

    components: {
      Loading,
    },

    mounted() {
      const el = this.$refs.wrapper;
      this.scroller = new BScroll(el, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: {
          // this.isPullingUp,
          threshold: -50,
        }
      })

      //滚动监听
      if (this.probeType === 2 || this.probeType === 3){
        this.scroller.on('scroll', (position) => {
          this.$emit('scrollPosition', position)
        })
      }

      //上拉加载监听
      if (this.isPullingUp){
        this.scroller.on('pullingUp', () => {
          this.isPullUp = true;
          this.$emit('loadMore')
        })
      }
    },
    methods : {
      refresh(){
        this.scroller && this.scroller.refresh()
      },
      pullingLoadDone(){
        this.scroller && this.scroller.finishPullUp()
      }
    }
  }
</script>

<style scoped>
  .wrapper {

  }
</style>
