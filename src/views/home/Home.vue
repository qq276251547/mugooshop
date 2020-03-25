<template>
  <div>
    <nav-bar class="nav-bar"><div slot="nav-center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-popular/>
    <tab-control :tab_titles="tab_titles" @tabIndex="getTabIndex"></tab-control>
    <ul>
      <li>hello1</li>
      <li>hello2</li>
      <li>hello3</li>
      <li>hello4</li>
      <li>hello5</li>
      <li>hello6</li>
      <li>hello7</li>
      <li>hello8</li>
      <li>hello9</li>
      <li>hello10</li>
      <li>hello11</li>
      <li>hello12</li>
      <li>hello13</li>
      <li>hello14</li>
      <li>hello15</li>
      <li>hello16</li>
      <li>hello17</li>
      <li>hello18</li>
      <li>hello19</li>
      <li>hello20</li>
      <li>hello21</li>
      <li>hello22</li>
      <li>hello23</li>
      <li>hello24</li>
      <li>hello25</li>
      <li>hello26</li>
      <li>hello27</li>
      <li>hello28</li>
      <li>hello29</li>
      <li>hello30</li>
      <li>hello31</li>
      <li>hello32</li>
      <li>hello33</li>
      <li>hello34</li>
      <li>hello35</li>
      <li>hello36</li>
      <li>hello37</li>
      <li>hello38</li>
      <li>hello39</li>
      <li>hello40</li>
      <li>hello41</li>
      <li>hello42</li>
      <li>hello43</li>
      <li>hello44</li>
      <li>hello45</li>
      <li>hello46</li>
      <li>hello47</li>
      <li>hello48</li>
      <li>hello49</li>
      <li>hello50</li>
      <li>hello51</li>
      <li>hello52</li>
      <li>hello53</li>
      <li>hello54</li>
      <li>hello55</li>
      <li>hello56</li>
      <li>hello57</li>
      <li>hello58</li>
      <li>hello59</li>
      <li>hello60</li>
      <li>hello61</li>
      <li>hello62</li>
      <li>hello63</li>
      <li>hello64</li>
      <li>hello65</li>
      <li>hello66</li>
      <li>hello67</li>
      <li>hello68</li>
      <li>hello69</li>
      <li>hello70</li>
      <li>hello71</li>
      <li>hello72</li>
      <li>hello73</li>
      <li>hello74</li>
      <li>hello75</li>
      <li>hello76</li>
      <li>hello77</li>
      <li>hello78</li>
      <li>hello79</li>
      <li>hello80</li>
      <li>hello81</li>
      <li>hello82</li>
      <li>hello83</li>
      <li>hello84</li>
      <li>hello85</li>
      <li>hello86</li>
      <li>hello87</li>
      <li>hello88</li>
      <li>hello89</li>
      <li>hello90</li>
      <li>hello91</li>
      <li>hello92</li>
      <li>hello93</li>
      <li>hello94</li>
      <li>hello95</li>
      <li>hello96</li>
      <li>hello97</li>
      <li>hello98</li>
      <li>hello99</li>
      <li>hello100</li>
    </ul>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childConps/HomeSwiper";
  import HomeRecommend from "./childConps/HomeRecommend";
  import HomePopular from "./childConps/HomePopular";
  import TabControl from "components/content/tabControl/TabControl";

  import {getMultiData, getGoodsData} from "network/home";

  export default {
    name: "Home",
    data(){
      return {
        current_goods_type: '',
        banners: [],
        recommends: [],
        tab_titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 1, data: []},
          'new': {page: 1, data: []},
          'sell': {page: 1, data: []}
        },
      }
    },

    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      TabControl,
    },

    mounted() {
      this.getHomeMultiData()

      this.getHomeGoodsData()
    },

    methods: {
      getTabIndex(tab_index){
        console.log(tab_index);
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

      /**
       * 网络请求数据方法
       */
      getHomeMultiData() {
        getMultiData().then(res => {
          console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },

      getHomeGoodsData(type) {
        getGoodsData('sell', 1).then(res => {
          console.log(res);
        })
      }
    },

  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
