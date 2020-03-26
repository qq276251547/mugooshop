<template>
  <div id="swiper-container">
    <!-- 轮播图主展示内容 -->
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="swiper">
      <slot></slot>
    </div>

<!--    <slot name="indicator"></slot>-->

    <!-- 轮播图指示器 -->
    <div class="indicator">
      <slot name="indicator" v-if="slideCount>1 && showIndicator">
        <div v-for="(indicator, index) in slideCount" :key="index" class="indi-item" :class="{active: index === currentIndex-1}"></div>
      </slot>
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
      },
      showIndicator: {
        type: Boolean,
        default: true
      },
      swipeRatio: {
        type: Number,
        default: 0.3
      }
    },

    data() {
      return {
        slideCount: 0,    //slid轮播图块的个数
        totalWidth: 0,    //全部的轮播图总长度
        swiperStyle: {},  //轮播图样式
        currentIndex: 1,  //默认当前轮播图index=1
        isMove: false     //是否在滚动中，默认false
      }
    },

    mounted() {
      setTimeout(() => {
        //1.当页面创建后，先操作dom生成无限轮播的前后两个slid结点元素
        this.handleDom();
        //2.启动定时器
        this.startTimer();
      }, 300)
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

      stopTimer(){
        window.clearInterval(this.playTimer)
      },

      /**
      * 滚动到指定位置
      */
      scrollContent(scrollPosition){
        this.isMove = true

        // 1.开始滚动动画
        this.swiperStyle.transition = 'transform '+ this.animDuration + 'ms';
        this.setTransform(scrollPosition);

        this.checkPosition()

        this.isMove = false
      },

      /**
       * 检测滚动位置是否正确
       */
      checkPosition(){
        setTimeout(() => {
          //先停止动画
          this.swiperStyle.transition = 'transform 0ms'
          //判断位置是否正常
          if(this.currentIndex >= this.slideCount + 1){
            this.currentIndex = 1
            this.setTransform(-this.currentIndex * this.totalWidth)
          }else if(this.currentIndex <= 0){
            this.currentIndex = this.slideCount
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
        // let swiperEl = document.querySelector('.swiper');
        let swiperEl = this.$refs.swiper;
        let slidesEls = swiperEl.getElementsByClassName('slide');
        this.slideCount = slidesEls.length;

        if(this.slideCount > 1){
          let cloneFirst = slidesEls[0].cloneNode(true);
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
          //将最后一张图拷贝一份插入到dom第一个结点上
          swiperEl.insertBefore(cloneLast, slidesEls[0]);
          //将原第一张图拷贝一份插入到dom最后一个结点上
          swiperEl.append(cloneFirst);
          this.totalWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
        }

        //设置当前默认轮播图显示为第二张图（即插入slide前的第一张）
        this.setTransform(-this.totalWidth);
      },

      /**
       * 轮播图手势切换
       */
      touchStart(event){
        // console.log("start: " + event.touches[0].pageX)
        // console.log("start clientX: " + event.touches[0].clientX)
        //如果正在滚动，不允许拖动
        if (this.isMove) return;

        //停止定时器后计算当前触摸点X坐标
        this.stopTimer();
        this.startX = event.touches[0].pageX
      },

      touchMove(event){
        // console.log("move: " + event.touches[0].pageX)
        // console.log("move clientX: " + event.touches[0].clientX)
        //在滑动时计算移动距离
        this.currentX = event.touches[0].pageX
        this.distance = this.currentX - this.startX
        //停止过度动画,进行滑动偏移
        // this.swiperStyle.transition = 'transform 0ms'
        this.setTransform(-this.currentIndex * this.totalWidth + this.distance)

      },

      touchEnd(event){
        let abs_distance = Math.abs(this.distance)
        //当触点松开时，需要计算当前偏移距离是否大于设定的滚动比例距离，如果是，则滚动吸附
        if(this.distance > 0 && abs_distance > this.totalWidth * this.swipeRatio){
          //往右吸附滑动一图，或吸附回原位置
          this.currentIndex--
        }else if(this.distance < 0 && abs_distance > this.totalWidth * this.swipeRatio){
          //往左吸附滑动一图，或吸附回原位置
          this.currentIndex++
        }
        //滚动到新吸附的位置
        this.scrollContent(-this.currentIndex * this.totalWidth)
        //重新启动定时器
        this.startTimer()
      },
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
