<template>
  <div class="loadingWord">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon--shanglajiantou"></use>
    </svg>
    <span>{{loadingWord}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      loadingWord: {
        type: String,
        default: ""
      }
    }

  };
</script>

<style scoped>
  .loadingWord {
    text-align: center;
    z-index: 100;
    width: 100%;
    height: 32px;
    line-height: 32px;
    background-color: yellow;
  }

  .loadingWord svg {
    vertical-align: middle;
  }

  .loadingWord span {
    vertical-align: middle;
    margin-left: 3px;
    font-size: 16px;
  }
</style>
