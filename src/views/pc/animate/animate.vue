<template>
  <div class="animate-container">
    <main class="main-first">
      <section class="main-first-section-first" :style="sectionFirstStyle">
        · tinyo
      </section>
      <section class="section main-first-section-second" :style="sectionSecondStyle">
        <div :style="isMeStyle">是的，这就是我</div>
        <img src="@/assets/animate/baby.jpeg" class="baby" :style="babyImgStyle" />
        <div class="desc-wrapper">
          <div class="desc-item desc-item-left" :style="descLeftStyle">
            <div><img src="@/assets/animate/1997.png" width="175" height="50" /></div>
            <div><img class="icon" src="@/assets/animate/boy.png" width="35" height="35" /> 男孩</div>
            <div><img class="icon" src="@/assets/animate/location.png" width="35" height="35" /> 深圳</div>
          </div>
          <div class="desc-item desc-item-right"></div>
        </div>
      </section>
    </main>
    <main class="main-second">
      <div class="interest-title">集喜爱于一身</div>
      <section class="main-second-section-first" :style="sectionThirdStyle">
        <div class="card-wrapper">
          <div class="card-item card-item1" :style="cardFirstStyle">旅行</div>
          <div class="card-item card-item2" :style="cardSecondStyle">艺术</div>
          <div class="card-item card-item3" :style="cardThirdStyle">篮球</div>
          <div class="card-item card-item4" :style="cardFourthStyle">探索</div>
          <div class="card-item card-item5" :style="cardFifthStyle">音乐</div>
          <div class="card-item card-item6" :style="cardSixthStyle">游戏</div>
          <div class="card-item card-item7" :style="cardSeventhStyle">电影</div>
        </div>
      </section>
      <div class="interest-title">未完待续</div>
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
        transform: `translateY(0px)`,
        opacity: 1
      },
      isMeStyle: {
        fontSize: '48px',
        transform: `translateY(50px) scale(0.4)`
      },
      babyImgStyle: {
        transform: `translateX(0px)`
      },
      descLeftStyle: {
        transform: `translateX(0px)`
      },
      sectionThirdStyle: {
        // opacity: 0,
        // visibility: 'hidden',
        // transform: `scale(0)`
      },
      // 第二部分变了
      cardFirstStyle: {
        opacity: 0.6,
        transform: `translateY(50px)`
      },
      cardSecondStyle: {
        opacity: 0.6,
        transform: `translateY(80px)`
      },
      cardThirdStyle: {
        opacity: 0.6,
        transform: `translateY(110px)`
      },
      cardFourthStyle: {
        opacity: 0.6,
        transform: `translateY(110px)`
      },
      cardFifthStyle: {
        opacity: 0.6,
        transform: `translateY(110px)`
      },
      cardSixthStyle: {
        opacity: 0.6,
        transform: `translateY(80px)`
      },
      cardSeventhStyle: {
        opacity: 0.6,
        transform: `translateY(100px)`
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
      // 是的，这就是我文字出现
      if (t > 100 && t < 550) {
        const prop = this.getPercentage(150, 350)
        const bornTranslateY = 50 - prop * 60
        this.isMeStyle.transform = `translateY(${bornTranslateY}px) scale(${prop * 1.3})`
      }
      // 文字往左, baby照片往右出现
      if (t > 700 && t < 1100) {
        const prop = this.getPercentage(750, 300)
        const translateX = prop * 150 
        this.babyImgStyle.transform = `translateX(${translateX}px)`
        const leftTranslateX = prop * 100
        this.descLeftStyle.transform = `translateX(-${leftTranslateX}px)`
      }
      // 是的，这就是我文字往上离开。文字往左离开。baby照片往右离开。
      // if (t > 1100 && t < 1500) {
        // const prop = this.getPercentage(1150, 300)
        // const topTranslateY = prop * 50 + 10
        // const leftTranslateX = prop * 100 + 100
        // const rightTranslateX = prop * 200 + 150
        // this.isMeStyle.transform =  `translateY(-${topTranslateY}px) scale(1.3)`
        // this.descLeftStyle.transform = `translateX(-${leftTranslateX}px)`
        // this.babyImgStyle.transform = `translateX(${rightTranslateX}px)`
        // this.sectionSecondStyle.opacity = 1 - prop
        // this.sectionThirdStyle.opacity = prop
        // this.sectionThirdStyle.visibility = 'unset'
        // this.sectionThirdStyle.transform = `scale(${prop})`
      // }
      if (t > 1750 && t < 1950) {
        const prop = this.getPercentage(1800, 50)
        const translateY = 50 - prop * 50
        this.cardFirstStyle.opacity = 0.6 + prop * 0.4
        this.cardFirstStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 1800 && t < 2000) {
        const prop = this.getPercentage(1850, 80)
        const translateY = 80 - prop * 80
        this.cardSecondStyle.opacity = 0.6 + prop * 0.4
        this.cardSecondStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 1850 && t < 2050) {
        const prop = this.getPercentage(1900, 80)
        const translateY = 110 - prop * 110
        this.cardThirdStyle.opacity = 0.6 + prop * 0.4
        this.cardThirdStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 1900 && t < 2100) {
        const prop = this.getPercentage(1950, 80)
        const translateY = 110 - prop * 110
        this.cardFourthStyle.opacity = 0.6 + prop * 0.4
        this.cardFourthStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 1950 && t < 2150) {
        const prop = this.getPercentage(2000, 80)
        const translateY = 110 - prop * 110
        this.cardFifthStyle.opacity = 0.6 + prop * 0.4
        this.cardFifthStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 2000 && t < 2200) {
        const prop = this.getPercentage(2050, 80)
        const translateY = 80 - prop * 80
        this.cardSixthStyle.opacity = 0.6 + prop * 0.4
        this.cardSixthStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 2050 && t < 2250) {
        const prop = this.getPercentage(2100, 80)
        const translateY = 100 - prop * 100
        this.cardSeventhStyle.opacity = 0.6 + prop * 0.4
        this.cardSeventhStyle.transform = `translateY(${translateY}px)`
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
        height: 2000px;
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
            margin-top: 30px;
            margin-bottom: -30px;
            width: 608px;
            height: 460.8px;
            z-index: 1;
          }
          .desc-wrapper {
            width: 100%;
            height: 460.8px;
            display: flex;
            justify-content: center;
            font-size: 32px;
            position: absolute;
            top: 270px;
            left: 0;

            .desc-item {
              padding: 80px 0;
              width: 350px;
              display: flex;
              flex-direction: column;
              & > div {
                margin-top: 10px;
                display: flex;
                align-items: center;
                .icon {
                  margin-right: 10px;
                  width: 35px;
                  height: 35px;
                }
              }
              &.desc-item-left {
                margin-left: 150px;
                align-items: flex-start;
              }
            }
          }
        }

        .main-first-section-third {
          display: flex;
          justify-content: center;
          align-items: center;

          .card {
            font-size: 38px;
            &.card-art {
              width: 200px;
              height: 200px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #f5f5f7;
              border-radius: 18px;
            }
          }
        }
      }

      &.main-second {
        height: 2000px;
        font-size: 38px;
        background-color: #000;

        .interest-title {
          padding: 200px 0 150px 0;
          display: flex;
          justify-content: center;
          font-size: 60px;
          color: #fff;
        }

        .main-second-section-first {
          display: flex;
          justify-content: center;
          align-items: center;

          .card-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 180px);
            grid-template-rows: repeat(3, 180px);
            gap: 10px;
            color: #000;

            .card-item {
              display: flex;
              justify-content: center;
              align-items: center;
              color: #fff;
              background-color: #eee;
              font-size: 46px;
              border-radius: 18px;
              transition: all 0.5s;
              user-select: none;

              &.card-item1 {
                grid-row-start: 1;
                grid-row-end: 3;
                background-image: url('~@/assets/animate/travel.webp');
                background-size: 110% 100%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 120% 110%; }
              }
              &.card-item2 {
                background-image: url('~@/assets/animate/star.webp');
                background-size: 140%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 150%; }
              }
              &.card-item3 {
                background-image: url('~@/assets/animate/kobe.webp');
                background-size: 150%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 170%; }
              }
              &.card-item4 {
                background-image: url('~@/assets/animate/blackhole.jpg');
                background-size: 180%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 200%; }
              }
              &.card-item5 {
                background-image: url('~@/assets/animate/guitar.webp');
                background-size: 180%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 200%; }
              }
              &.card-item6 {
                background-image: url('~@/assets/animate/akl.jpg');
                background-size: 180%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 200%; }
              }
              &.card-item7 {
                grid-column-start: 2;
                grid-column-end: 4;
                background-image: url('~@/assets/animate/ironman.gif');
                background-size: 111%;
                background-position: center;
                background-repeat: no-repeat;
              }
            }
          }
        }
      }
    }
  }
</style>
