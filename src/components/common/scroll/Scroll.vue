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
        click: true
      })

      this.scroller.on('scroll', (position) => {
        this.$emit('scrollPosition', position)
      })
    },
    methods : {
      refresh(){
        this.scroller.refresh()
      }
    }
  }
</script>

<style scoped>
  .wrapper {

  }
</style>
