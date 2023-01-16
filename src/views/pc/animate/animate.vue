<template>
  <div class="animate-container">
    <main class="main-first">
      <section class="main-first-section-first" :style="sectionFirstStyle">
        · tinyo
      </section>
      <section class="section main-first-section-second" :style="sectionSecondStyle">
        <div :style="bornStyle">诞生于1997</div>
        <img src="@/assets/animate/baby.jpeg" class="baby" />
        <div class="desc-wrapper">
          <div class="desc-item desc-item-left"><span>男孩</span><span>汕尾</span><span>深圳</span></div>
          <div class="desc-item desc-item-right"><span>天真</span><span>善良</span><span>活泼</span><span>开心</span></div>
        </div>
      </section>
      <!-- <section class="section main-first-section-third">
        asdasdasdasd
      </section> -->
    </main>
    <main class="main-second">
      asdasdasdasdsasd
    </main>
  </div> 
</template>

<script>
import CoolNav from '@/components/coolNav.vue'
export default {
  components: { CoolNav },
  data () {
    return {
      // 第一部分变量
      sectionFirstStyle: {
        opacity: 1,
        transform: `translateY(-50px)`
      },
      sectionSecondStyle: {
        transform: `translateY(0px)`
      },
      bornStyle: {
        fontSize: '48px',
        fontWeight: 'bold',
        transform: `translateY(50px) scale(0.4)`
      }
    }
  },
  mounted () {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 0) document.body.scrollTop = document.documentElement.scrollTop = 0
    window.addEventListener('scroll', this.watchWindowScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.watchWindowScroll);
  },
  methods: {
    // 获取开始的像素值距离完成的像素值的百分比 0—>1
    getPercentage(beginPx, totalPx) {
      const t = document.documentElement.scrollTop;
      const p = ((t - beginPx) / totalPx) < 0 ? 0 : ((t - beginPx) / totalPx)
      return p > 1 ? 1 : p
    },
    watchWindowScroll(e) {
      const t = document.documentElement.scrollTop;
      console.log('scrollTop', t);

      // ((t - x) / y): 屏幕滚动的比例
      // t: scrollTop屏幕滚动的像素距离
      // x: 开始动画的像素值
      // y: 完成动画所用的像素距离

      // tinyo文字渐变退去 加速往上推动
      if (t > 100 && t < 400) {
        const prop = this.getPercentage(130, 200)
        const opacity = 1 - prop
        const translateY = 50 + (prop * 100 > 100 ? 100 : prop * 100)
        this.sectionFirstStyle.opacity = opacity
        this.sectionFirstStyle.transform = `translateY(-${translateY}px)`
      }

      if (t > 100 && t < 470) {
        const prop = this.getPercentage(150, 290)
        const bornTranslateY = 50 - prop * 60
        this.bornStyle.transform = `translateY(${bornTranslateY}px) scale(${prop})`
      }
      if (t > 700 && t < 1500) {
        const prop = this.getPercentage(750, 300)
        const bornTranslateY = prop * 60 - 10
        this.bornStyle.transform = `translateY(${bornTranslateY}px) scale(${1 - prop})`

      }
    }
  }
}
</script>

<style scoped lang="scss">
  .animate-container {
    position: relative;
    color: #000;
    background-color: #fff;

    & > main {
      width: 100%;
      position: relative;

      .section {
        height: 100vh;
        position: sticky;
        top: 0px;
        left: 0px;
      }

      &.main-first {
        height: 4100px;
        font-size: 150px;

        .main-first-section-first {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('~@/assets/animate/rainbow.jpeg');
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          user-select: none;
        }

        .main-first-section-second {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .baby {
            width: 760px;
            height: 576px;
            z-index: 1;
          }
          .desc-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 36px;
            position: absolute;
            top: 270px;
            left: 0;
            z-index: 99;

            .desc-item {
              width: 380px;
              display: flex;
              flex-direction: column;

              & > span {
                padding: 20px 0;
              }

              &.desc-item-left {
                align-items: flex-start;
                // justify-content: flex-start;
              }

              &.desc-item-right {
                align-items: flex-end;
                // justify-content: flex-end;
              }
            }
          }
        }
      }
    }
  }
</style>
