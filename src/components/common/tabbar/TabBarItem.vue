<template>
  <div class="tab-bar-item" @click="goItem">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    computed: {
      isActive(){
        return this.link.includes(this.$route.path)
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    props:{
      link: {type: String},
      activeColor: {
        type: String,
        default: '#fe5b7a'
      }
    },
    methods: {
      goItem(){
        this.$router.replace(this.link).catch(err => err)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 4px;
    margin-bottom: 3px;
  }

</style>
