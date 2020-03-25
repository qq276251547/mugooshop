<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(tab, index) in tab_titles"
         :key="index"
         @click="tabClick(index)"
         :class="{'activity': index === currentIndex}"
    >
      <span>{{tab}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      tab_titles: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index
        this.$emit('tabIndex', this.currentIndex)
      },
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    /*background-color: #fff;*/
    margin-bottom: 5px;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .activity {
    color: var(--color-high-text);
  }

  .activity span {
    border-bottom: 2px solid var(--color-high-text)
  }
</style>
