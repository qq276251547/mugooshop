<template>
  <div class="home">
    <nav-bar class="nav-bar"><div slot="nav-center">购物街</div></nav-bar>
    <scroll class="scroller-view"
            ref="scrollerView"
            @scrollPosition="getScrollPosition"
            @loadMore ="pullingUpLoadMore"
            :probe-type="3" :is-pulling-up="true">
      <home-swiper :banners="banners"/>
      <home-recommend :recommends="recommends"/>
      <home-popular/>
      <tab-control :tab_titles="tab_titles" @tabIndex="getTabIndex"></tab-control>
      <goods-list :goodsListData="getGoodsListData"></goods-list>
    </scroll>
    <back-top class="back-top" @click.native="backTop" v-show="backTopShow">
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>

  import Scroll from "components/common/scroll/Scroll";
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childConps/HomeSwiper";
  import HomeRecommend from "./childConps/HomeRecommend";
  import HomePopular from "./childConps/HomePopular";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/content/backtop/BackTop";

  import {getMultiData, getGoodsData} from "network/home";
  import {debounce} from "common/utils";

  export default {
    name: "Home",
    data(){
      return {
        current_goods_type: 'pop',
        banners: [],
        recommends: [],
        tab_titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, data: []},
          'new': {page: 0, data: []},
          'sell': {page: 0, data: []}
        },
        backTopShow: false
      }
    },
    computed: {
      getGoodsListData() {
        return this.goods[this.current_goods_type].data
      },
    },

    components: {
      Scroll,
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      TabControl,
      GoodsList,
      BackTop,
    },

    created() {
      this.getHomeMultiData();

      this.getHomeGoodsData('pop');
      this.getHomeGoodsData('new');
      this.getHomeGoodsData('sell');
    },

    mounted() {
      const refresh = debounce(this.$refs.scrollerView.refresh, 100);

      this.$bus.$on('imageLoadFinish',  () => {
        refresh()
      })
    },

    methods: {
      getTabIndex(tab_index){
        switch (tab_index) {
          case 0:
            this.current_goods_type = 'pop';
            break;
          case 1:
            this.current_goods_type = 'new';
            break;
          case 2:
            this.current_goods_type = 'sell';
            break;
        }
      },

      backTop() {
        this.$refs.scrollerView.scroller.scrollTo(0, 0, 800)
      },

      getScrollPosition(position) {
        this.backTopShow = Math.abs(position.y) > document.documentElement.clientHeight * 2;
      },

      /**
       * 网络请求数据方法
       */
      getHomeMultiData() {
        getMultiData().then(res => {
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      //获取某一类型商品的数据，在第一次加载的时候只默认加载第一页数据
      getHomeGoodsData(type) {
        let page = this.goods[type].page + 1;
        getGoodsData(type, page).then(res => {
          this.goods[type].data.push(...res.data.list);
          this.goods[type].page += 1;
          console.log(this.goods)
        })
      },

      pullingUpLoadMore() {
        console.log("上拉加载更多")
        this.getHomeGoodsData(this.current_goods_type)
        this.$refs.scrollerView.pullingLoadDone()
      }

    },

  }
</script>

<style scoped>
  .home {
    height: 100vh;
    /*position: relative;*/
    /*margin-top: 44px;*/
  }

  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }

  .scroller-view {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    /*margin-top: 44px;*/
    /*height: calc(100% - 93px);*/
  }

  .back-top {
    position: fixed;
    bottom: 60px;
    right: 10px;
    /*z-index: 10;*/
  }
</style>
