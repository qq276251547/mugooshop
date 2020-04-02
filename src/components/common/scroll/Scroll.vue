<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

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
      }
    },
    mounted() {
      const el = this.$refs.wrapper;
      this.scroller = new BScroll(el, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.isPullingUp
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
