<template>
  <div class="animate-container">
    <main class="main-first">
      <section class="main-first-section-first" :style="sectionFirstStyle">
        · tinyo
      </section>
      <section class="section main-first-section-second" :style="sectionSecondStyle">
        <div :style="sloganFirstStyle">出淤泥而不染</div>
        <img src="@/assets/animate/baby.jpeg" class="baby-img" />
        <div class="desc-wrapper">
          <div class="desc-item desc-item-left" :style="descStyle">
            <div><img src="@/assets/animate/1997.png" width="175" height="50" /></div>
            <div><img class="icon" src="@/assets/animate/boy.png" /> 男孩</div>
            <div><img class="icon" src="@/assets/animate/location.png" /> 深圳</div>
          </div>
          <div class="desc-item desc-item-right"></div>
        </div>
      </section>
    </main>
    <main class="main-second">
      <section class="main-second-section-first">
        <div class="interest-title">集喜爱于一身</div>
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
      <section class="main-second-section-second">
        <div class="interest-title">人生, 很简单</div>
        <div class="pursue eat-wrapper">吃</div>
        <div class="pursue drink-wrapper">喝</div>
        <div class="pursue play-wrapper">
          <video
            class="play-vedio"
            ref="playVedio"
            src="@/assets/animate/fun/play.mp4"
            id="video-home"
            data-object-fit=""
            playsinline
            muted
            autoplay
            loop
            x5-playsinline
            webkit-playsinline="true"
            x5-video-player-type="h5"
            preload="auto"
          />
          <span class="play-title">玩乐</span>
        </div>
      </section>
      <div class="interest-title">参杂些烦恼</div>
      <section class="main-second-section-third" :style="sectionThridStyle" >
        <!-- <div class="pursue drink-wrapper">喝</div> -->
        <div class="worry worry-job" :style="worryJobStyle">
          <span class="worry-title" :style="worryJobTitleStyle">工作压力</span>
        </div>
        <div class="worry worry-life" :style="worryLifeStyle">
          <span class="worry-title" :style="worryLifeTitleStyle">生活压力</span>
        </div>
        <div class="worry worry-socialize" :style="worrySocializeStyle">
          <span class="worry-title" :style="worrySocializeTitleStyle">社交压力</span>
        </div>
      </section>
      <section class="main-second-section-fourth">
        <div class="interest-title">不变的是向往快乐的心</div>
      </section>
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
      sloganFirstStyle: {
        fontSize: '48px',
        transform: `translateY(50px) scale(0.4)`
      },
      descStyle: {
        opacity: 0,
        transform: `translateX(30px)`
      },
      // 第二部分
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
        opacity: 0.3,
        transform: `translateY(140px)`
      },
      cardFifthStyle: {
        opacity: 0.3,
        transform: `translateY(110px)`
      },
      cardSixthStyle: {
        opacity: 0.3,
        transform: `translateY(80px)`
      },
      cardSeventhStyle: {
        opacity: 0.3,
        transform: `translateY(100px)`
      },
      // 第三部分
      sectionThridStyle: {
        opacity: 0,
        transform: `translateY(300px)`
      },
      worryJobStyle: {
        opacity: 1,
        transform: `translateY(0px)`
      },
      worryJobTitleStyle: {
        opacity: 0,
        transform: `translateX(-30px)`
      },
      worryLifeStyle: {
        opacity: 0,
        transform: `translateX(-30px)`
      },
      worryLifeTitleStyle: {
        opacity: 0,
        transform: `translateX(-30px)`
      },
      worrySocializeStyle: {
        opacity: 0,
        transform: `translateX(-30px)`
      },
      worrySocializeTitleStyle: {
        opacity: 0,
        transform: `translateX(-30px)`
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
      // 出淤泥而不染文字出现
      if (t > 100 && t < 550) {
        const prop = this.getPercentage(150, 350)
        const bornTranslateY = 50 - prop * 60
        this.sloganFirstStyle.transform = `translateY(${bornTranslateY}px) scale(${prop * 1.3})`
      }
      // 文字在baby照片中渐变往左出现
      if (t > 700 && t < 1100) {
        const prop = this.getPercentage(750, 300)
        const translateX = 30 - prop * 30 
        this.descStyle.opacity = prop
        this.descStyle.transform = `translateX(${translateX}px)`
      }
      // 卡片渐变从下往上出现
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
        this.cardFourthStyle.opacity = 0.3 + prop * 0.7
        this.cardFourthStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 1950 && t < 2150) {
        const prop = this.getPercentage(2000, 80)
        const translateY = 140 - prop * 140
        this.cardFifthStyle.opacity = 0.3 + prop * 0.7
        this.cardFifthStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 2000 && t < 2200) {
        const prop = this.getPercentage(2050, 80)
        const translateY = 80 - prop * 80
        this.cardSixthStyle.opacity = 0.3 + prop * 0.7
        this.cardSixthStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 2050 && t < 2250) {
        const prop = this.getPercentage(2100, 80)
        const translateY = 100 - prop * 100
        this.cardSeventhStyle.opacity = 0.3 + prop * 0.7
        this.cardSeventhStyle.transform = `translateY(${translateY}px)`
      }
      
      // 烦恼部分显示
      if (t > 5850 && t < 6700) {
        const prop = this.getPercentage(5900, 600)
        const translateY = 300 - prop * 300
        this.sectionThridStyle.opacity = prop
        this.sectionThridStyle.transform = `translateY(${translateY}px)`
      }
      if (t > 6650 && t < 6950) {
        const prop = this.getPercentage(6700, 200)
        const translateY = 30 - prop * 30
        this.worryJobTitleStyle.opacity = prop
        this.worryJobTitleStyle.transform = `translateX(-${translateY}px)`
      }
      if (t > 6850 && t < 7250) {
        const prop = this.getPercentage(6900, 300)
        const translateY = prop * 30
        this.worryJobStyle.opacity = 1 - prop
        this.worryJobStyle.transform = `translateY(-${translateY}px)`
      }
      if (t > 7200 && t < 7500) {
        const prop = this.getPercentage(7250, 200)
        const translateY = 30 - prop * 30
        this.worryLifeStyle.opacity = prop
        this.worryLifeStyle.transform = `translateY(-${translateY}px)`
      }
      if (t > 7450 && t < 7750) {
        const prop = this.getPercentage(7500, 200)
        const translateY = 30 - prop * 30
        this.worryLifeTitleStyle.opacity = prop
        this.worryLifeTitleStyle.transform = `translateX(-${translateY}px)`
      }
      if (t > 7650 && t < 8050) {
        const prop = this.getPercentage(7700, 300)
        const translateY = prop * 30
        this.worryLifeStyle.opacity = 1 - prop
        this.worryLifeStyle.transform = `translateY(-${translateY}px)`
      }
      if (t > 8000 && t < 8300) {
        const prop = this.getPercentage(8050, 200)
        const translateY = 30 - prop * 30
        this.worrySocializeStyle.opacity = prop
        this.worrySocializeStyle.transform = `translateY(-${translateY}px)`
      }
      if (t > 8250 && t < 8550) {
        const prop = this.getPercentage(8300, 200)
        const translateY = 30 - prop * 30
        this.worrySocializeTitleStyle.opacity = prop
        this.worrySocializeTitleStyle.transform = `translateX(-${translateY}px)`
      }
      // if (t > 8450 && t < 8850) {
      //   const prop = this.getPercentage(8500, 300)
      //   const translateY = prop * 30
      //   this.worrySocializeStyle.opacity = 1 - prop
      //   this.worrySocializeStyle.transform = `translateY(-${translateY}px)`
      // }
    }
  }
}
</script>

<style scoped lang="scss">
  .animate-container {
    position: relative;
    color: #fff;
    background-color: #000;

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
          .baby-img {
            margin-top: 50px;
            margin-bottom: -30px;
            width: 608px;
            height: 460.8px;
            border-radius: 8px;
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
        height: 12000px;
        font-size: 38px;
        background-color: #000;

        .interest-title {
          padding: 200px 0 120px 0;
          display: flex;
          justify-content: center;
          font-size: 60px;
          color: #fff;
        }

        .main-second-section-first {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .card-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 220px);
            grid-template-rows: repeat(3, 220px);
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
                background-image: url('~@/assets/animate/card/travel.webp');
                background-size: 110% 100%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 120% 110%; }
              }
              &.card-item2 {
                background-image: url('~@/assets/animate/card/star.webp');
                background-size: 140%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 150%; }
              }
              &.card-item3 {
                background-image: url('~@/assets/animate/card/kobe.webp');
                background-size: 150%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 170%; }
              }
              &.card-item4 {
                background-image: url('~@/assets/animate/card/blackhole.jpg');
                background-size: 180%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 200%; }
              }
              &.card-item5 {
                background-image: url('~@/assets/animate/card/guitar.webp');
                background-size: 180%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 200%; }
              }
              &.card-item6 {
                background-image: url('~@/assets/animate/card/akl.jpg');
                background-size: 180%;
                background-position: center;
                background-repeat: no-repeat;
                &:hover { background-size: 200%; }
              }
              &.card-item7 {
                grid-column-start: 2;
                grid-column-end: 4;
                background-image: url('~@/assets/animate/card/ironman.gif');
                background-size: 111%;
                background-position: center;
                background-repeat: no-repeat;
              }
            }
          }
        }

        .main-second-section-second {
          margin-top: 100px;
          color: #fff;

          .bg-img {
            width: 100%;
          }

          .pursue {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 200px;
            user-select: none;

            &.eat-wrapper {
              width: 100vw;
              height: 889.63px;
              background-image: url('~@/assets/animate/fun/barbecue.jpg');
              background-size: 100%;
              background-position: center;
              background-repeat: no-repeat;
            }
            &.drink-wrapper {
              width: 100vw;
              height: 846.57px;
              background-image: url('~@/assets/animate/fun/beer.jpg');
              background-size: 100%;
              background-position: center;
              background-repeat: no-repeat;
            }
            &.play-wrapper {
              width: 100vw;
              height: 806.4px;
              position: relative;
              .play-vedio {
                width: 100%;
                height: 100%;
              }
              .play-title {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0px;
                left: 0px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }

        .main-second-section-third {
          height: 2800px;
          display: flex;
          flex-direction: column;
          color: #fff;
          position: relative;

          .worry {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: sticky;
            top: 0;
            left: 0;
            user-select: none;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            .worry-title {
              font-size: 120px;
            }
            &.worry-job {
              background-image: url('~@/assets/animate/worry/job.jpeg');
            }
            &.worry-life {
              background-image: url('~@/assets/animate/worry/life.jpeg');
            }
            &.worry-socialize {
              background-image: url('~@/assets/animate/worry/socialize.jpeg');
            }
          }
        }
      }
    }
  }
</style>
