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
    data() {
      return {
        scroll: {}
      }
    },
    mounted() {
      const el = this.$refs.wrapper;
      this.scroll = new BScroll(el, {
        probeType: 3,
        click: true
      })

      this.scroll.on('scroll', (position) => {
        console.log(position)
      })
    }
  }
</script>

<style scoped>
  .wrapper {

  }
</style>
