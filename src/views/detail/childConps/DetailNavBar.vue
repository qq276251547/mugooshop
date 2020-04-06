<template>
  <div>
    <nav-bar>
      <div slot="nav-left" class="backBtn">
        <img  src="~assets/img/common/back.svg" alt="返回" @click="backClick">
      </div>
      <div slot="nav-center" class="titlesContain">
        <span v-for="(title, index) in titles"
             :key="index"
             class="titleItem" :class="{active: index === currentIndex}" @click="titleItemClick(index)">
          {{title}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    props: {
     titles: {
       type: Array,
       default(){
         return []
       }
     }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    components: {
      NavBar,
    },
    methods: {
      titleItemClick(itemIndex) {
        this.currentIndex = itemIndex;
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

  .backBtn {
    margin-top: 5px;
  }

  .titlesContain {
    display: flex;
  }

  .titleItem {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
