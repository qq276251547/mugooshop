<template>
	<div class="loading">
    <img src="~assets/img/loading/loading.svg"  alt=""><span>{{loadingWord}}</span>
  </div>
</template>

<script>
export default {
    name: 'loading',
    props:{
    	loadingWord:{
    		type:String
    	}
    } ,
    data () {
      return {

      }
  	}
};
</script>

<style scoped>
	.loading {
    text-align: center;
    z-index: 100;
    width: 100%;
    height: 32px;
    line-height: 32px;
    /*background-color: burlywood;*/
  }

  .loading img {
    margin: 0 auto;
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
  .loading span{
    vertical-align: middle;
    margin-left: 10px;
    font-size: 14px;
  }
</style>
