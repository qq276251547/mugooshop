<template>
  <div id="swiper-container">
    <!-- 轮播图主展示内容 -->
    <div class="swiper">
      <slot></slot>
    </div>

    <!-- 轮播图指示器 -->
    <div class="indicator">
      <slot name="indicator"></slot>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Swiper",

    props: {
      interval: {
        type: Number,
        default: 3000
      },
      animDuration: {
        type: Number,
        default: 300
      }

    },

    data() {
      return {
        slideCount: 0,    //slid轮播图块的个数
        totalWidth: 0,    //全部的轮播图总长度
        swiperStyle: {},  //轮播图样式
        currentIndex: 1,  //默认当前轮播图index=1
      }
    },

    mounted() {
      setTimeout(() => {
        //1.当页面创建后，先操作dom生成无限轮播的前后两个slid结点元素
        this.handleDom()

        this.startTimer()

      }, 1000)
    },

    methods: {
      /**
       * 设置定时器相关操作
       */
      startTimer(){
        //使用定时器，先清定时器
        if(this.playTimer){
          window.clearInterval(this.playTimer)
        }

        this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(this.totalWidth * -this.currentIndex)

        }, this.interval)
      },

      /**
      * 滚动到指定位置
      */
      scrollContent(scrollPosition){
        // 1.开始滚动动画
        this.swiperStyle.transition = 'transform '+ this.animDuration + 'ms';
        this.setTransform(scrollPosition);

        this.checkPosition()

      },

      /**
       * 检测滚动位置是否正确
       */
      checkPosition(){
        setTimeout(() => {
          //先停止动画
          console.log("enter check position..")
          this.swiperStyle.transition = 'transform 0ms'
          console.log(this.currentIndex)
          console.log(-this.totalWidth * this.currentIndex)
          //判断位置是否正常
          if(this.currentIndex >= this.slideCount + 1){
            console.log("aaaaaaaaaa")
            this.currentIndex = 1
            this.setTransform(-this.currentIndex * this.totalWidth)
          }

          // 2.结束移动后的回调
          // this.$emit('transitionEnd', this.currentIndex-1);

        }, this.animDuration)
      },

      /**
       * 设置滚动的位置
       */
      setTransform: function (position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },

      handleDom(){
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');

        this.slideCount = slidesEls.length;

        if(this.slideCount > 1){
          let cloneFirst = slidesEls[0].cloneNode(true);
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
          //将最后一张图拷贝一份插入到dom第一个结点上
          swiperEl.insertBefore(cloneLast, slidesEls[0]);
          //将原第一张图拷贝一份插入到dom最后一个结点上
          swiperEl.append(cloneFirst)

          this.totalWidth = swiperEl.offsetWidth
          this.swiperStyle = swiperEl.style

        }

        //设置当前默认轮播图显示为第二张图（即插入slide前的第一张）
        console.log(this.totalWidth)
        this.setTransform(-this.totalWidth)
      }

    }

  }
</script>

<style scoped>
  #swiper-container{
    overflow: hidden;
    position: relative;
  }

  .swiper{
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>
