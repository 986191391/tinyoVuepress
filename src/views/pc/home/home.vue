<template>
  <div>
    <div class="home-main">
      <div class="top-animate-nav">
        <div class="top-animate-bg"
          :style="{
            width: `${isShowTopNav ? '100%' : '0px'}`
          }"
        >
          <svg
            class="top-right-svg"
            version="1.1"
            id="svg9-Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="22px"
            height="20px"
            viewBox="0 0 18 18"
            enable-background="new 0 0 18 18"
            xml:space="preserve"
            @click="isNavScreenShown = true"
          >
            <rect fill-rule="evenodd" clip-rule="evenodd" width="22" height="4"></rect>
            <rect y="7" fill-rule="evenodd" clip-rule="evenodd" width="22" height="4"></rect>
            <rect y="14" fill-rule="evenodd" clip-rule="evenodd" width="22" height="4"></rect>
          </svg>
        </div>
      </div>
      <transition name="navScreen">
        <section v-if="isNavScreenShown" :class="`nav-full-screen ${closeFlag && 'nav-full-screen-closing'}`" >
          <p @click="() => onNavClick('/animate')">Animate Demo</p>
          <p @click="() => onNavClick('/viewport')">Viewport</p>
          <p @click="() => onNavClick('/board')">Job Board</p>
          <p @click="() => onNavClick('/author')">About Tinyo</p>
          <p @click="() => onNavClick('/threeJs')">ThreeJs Toys</p>
          <p @click="() => onNavClick('/lottery')">Prize Wheel</p>
          <p @click="() => onNavClick('/fabric')">Fabric</p>
          <p @click="() => onNavClick('doc')">Tinyo Docs</p>
          <p @click="onCloseNavScreen"><i class="el-icon-plus" /></p>
        </section>
      </transition>
      <section class="top-section" :style="topSectionStyle">
        <div class="slogan-wrapper">
          <div class="slogan-title">tinyo {{cursorValue}}</div>
          <div class="slogan-desc">
            · 无论何时，开心万岁
          </div>
          <img src="@/assets/ironheart.png" :style="ironHeartStyle" class="iron-heart" @click="sloganFlash" />
        </div>
      </section>
      <section class="section">
        <div class="section-title section-title-yellow">
          <span>Beer </span><span> and </span><span>Skittles</span>
        </div>
        <CoolSwipe
          name="beerandskittles"
          :data="[swipe1, swipe2, swipe3, swipe4, swipe5, swipe6, swipe7, swipe8]"
        />
      </section>
      <section class="section demo-wrapper">
        <div class="section-title section-title-blue">
          <span>L</span><span>e</span><span>a</span><span>r</span><span>n</span><span> De</span><span>mo</span>
        </div>
        <MacWindow windowWidth="80%">
          <div class="show-wrapper">
            <div class="show-aside">
              <CoolAside />
            </div>
            <div class="show-main">
              <router-view/>
            </div>
          </div>
        </MacWindow>
      </section>
      <div class="friend-wrapper">
        <div class="friend-title">
          <span>My </span><span>F</span><span>r</span><span>i</span><span>e</span><span>n</span><span>d</span><span>s</span>
        </div>
        <div class="desc">
          · 无论何时，开心万岁！
        </div>
        <!-- <img src="@/assets/homeperson/lsl.png" width="85" alt class="person person-lsl" />
        <img src="@/assets/homeperson/pyz.png" width="102" alt class="person person-pyz" />
        <img src="@/assets/homeperson/ljy.png" width="100" alt class="person person-ljy" />
        <img src="@/assets/homeperson/yzf.png" width="95" alt class="person person-yzf" /> -->
      </div>
      <footer>Design By 2e4ong</footer>
      <!-- 2022 -> 跨年(河源/烟花/烧烤/UNo/倒数/万绿湖/红烧芋头) -> -->
    </div>
  </div> 
</template>

<script>
import swipe1 from '@/assets/homeswipe/swipe1.png'
import swipe2 from '@/assets/homeswipe/swipe2.png'
import swipe3 from '@/assets/homeswipe/swipe3.jpg'
import swipe4 from '@/assets/homeswipe/swipe4.jpg'
import swipe5 from '@/assets/homeswipe/swipe5.jpg'
import swipe6 from '@/assets/homeswipe/swipe6.jpg'
import swipe7 from '@/assets/homeswipe/swipe7.jpg'
import swipe8 from '@/assets/homeswipe/swipe8.jpg'

import CoolNav from '@/components/coolNav.vue'
import CoolAside from '@/components/coolAside.vue'
import MacWindow from '@/components/macWindow.vue'
import CoolSwipe from '@/components/coolSwipe.vue'

export default {
  components: { CoolNav, CoolAside, MacWindow, CoolSwipe },
  data () {
    return {
      swipe1, swipe2, swipe3, swipe4, swipe5, swipe6, swipe7, swipe8,
      // 以下用于控制第一屏文字的显示
      cursorValue: '',
      sloganModel: true, // true 显示play; flase显示cool;
      // 以下变量用于顶部导航栏
      isShowTopNav: false,
      closeFlag: false,
      isNavScreenShown: false,
      topSectionStyle: {
        // transform: 'scale(1)',
        opacity: 1
      },
      ironHeartStyle: {
        transform: 'scale(1) rotate(0deg)',
      }
    }
  },
  mounted () {
    this.sloganFlash()
    window.addEventListener('scroll', this.watchWindowScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.watchWindowScroll);
  },
  methods: {
    onNavClick (route) {
      if (route === 'doc') return window.open('http://43.139.113.7:8081/docs/')
      const curPath = this.$route.fullPath
      if (curPath === route) return
      this.$router.push(route)
    },
    sloganFlash () {
      let index = 0
      if (this.sloganModel) {
        const simulationArr = ['', '', 'with ', 'Play ', '& ', 'Learn']
        let cursorValue = ''
        const timer = setInterval(() => {
          index++
          if (index === 5) clearInterval(timer)
          cursorValue = `${cursorValue}${simulationArr[index]}`
          this.cursorValue = cursorValue
        }, 300)
      } else {
        const simulationArr = ['with Play & Learn','with Play &', 'with Play', 'with', '', 'is', 'is cool']
        const timer = setInterval(() => {
          index++
          if (index === 6) clearInterval(timer)
          this.cursorValue = simulationArr[index]
        }, 300)
      }
      this.sloganModel = !this.sloganModel
    },
    watchWindowScroll () {
      const { scrollTop, clientHeight } = document.documentElement
      this.isShowTopNav = scrollTop >= 100
      if (scrollTop === 0) {
        this.topSectionStyle.opacity = 1
      }
      // 0 - 500px： top-section , 1 - 0.5 倍数/透明度变换 
      if (scrollTop > 0 && scrollTop < 900) {
        this.topSectionStyle.opacity = 1.2 - (scrollTop / 900)
        // this.ironHeartStyle.transform = `scale(1) rotate(${scrollTop/900 * 270}deg)`
        // this.topSectionStyle.transform = `scale(${1 - (onePrecent > 0.5 ? 0.5 : onePrecent)})`
      }
    },
    onCloseNavScreen () {
      this.closeFlag = true
      setTimeout(() => {
        this.isNavScreenShown = false
        this.closeFlag = false
      }, 500)
    }
  }
}
</script>

<style scoped lang="scss">
  // navScreen打开时的渐变效果
  .navScreen-enter-active,
  .navScreen-leave-active {
    opacity: 1;
    font-size: 100px;
    transition: all 0.3s;
  }
  .navScreen-enter {
    opacity: 0;
  }
  .navScreen-leave-to {
    opacity: 0;
  }

  .home-main {
    min-width: 1200px;
    color: #fff;
    background-color: #000;

    ::selection {
      background-color: #a1a1a1;
    }

    .cool-nav {
      padding: 10px 0px;
      background-color: #000;
      border-bottom: none;
    }

    .top-animate-nav {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      background-color: transparent;
      z-index: 1;

      .top-animate-bg {
        height: 100%;
        transition: all 0.5s;
        background-color: #111;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;

        .top-right-svg {
          fill: #d8d8d8;
          margin-right: 20px;
          transition: all 0.3s;
          cursor: pointer;

          &:hover {
            fill: #dc5b48;
          }
        }
        // border-bottom: 1px solid #7bf0ff;
      }
    }

    .nav-full-screen {
      padding: 20px 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      background: #080808;
      z-index: 99;
      overflow: scroll;
      scrollbar-width: none; // 清除firefox滚动条

      & > p {
        margin: 0;
        font-size: 54px;
        font-weight: 600;
        font-family: 'FuturaStd';
        color: #1a1c1e;
        // text-transform: uppercase;
        transition: all 0.2s;
        cursor: pointer;
        
        .el-icon-plus {
          margin-top: 40px;
          padding: 10px;
          border: 1px solid #fff;
          transform: rotate(45deg);
          transition: all 0.3s;
          font-size: 28px;
          color: #fff;
        }

        &:hover {
          color: #7bf0ff;
          .el-icon-plus {
            transform: rotate(135deg);
            border-color: #dc5b48;
            color: #dc5b48;
          }
        }
      }

      &.nav-full-screen-closing {
        > p {
          &:nth-child(1) {
            animation: scaleFrames 0.5s linear 0.05s infinite;
          }
          &:nth-child(2) {
            animation: scaleFrames 0.5s linear 0.15s infinite;
          }
          &:nth-child(3) {
            animation: scaleFrames 0.5s linear 0.2s infinite;
          }
          &:nth-child(4) {
            animation: scaleFrames 0.5s linear 0.25s infinite;
          }
          &:nth-child(5) {
            animation: scaleFrames 0.5s linear 0.3s infinite;
          }
          &:nth-child(6) {
            animation: scaleFrames 0.5s linear 0.35s infinite;
          }
          &:nth-child(7) {
            animation: scaleFrames 0.5s linear 0.4s infinite;
          }
          &:nth-child(8) {
            animation: scaleFrames 0.5s linear 0.45s infinite;
          }
        }
      }

      @keyframes scaleFrames{
        from{
          opacity: 1;
          transform: scale(1);
        }
        to{
          opacity: 0.2;
          transform: scale(2);
        }
      }
    }

    .top-section {
      position: relative;

      .slogan-wrapper {
        min-height: calc(100vh - 80px);
        padding: 64px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;
        background-image: url('~@/assets/ironman.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        .slogan-title {
          font-size: 82px;
          position: relative;
          &::after {
            content: '';
            width: 1.5px;
            height: 100px;
            position: absolute;
            right: -4px;
            background-color: #fff;
            animation: flash 1.5s linear infinite;
          }
            
          @keyframes flash {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }

        .slogan-desc {
          margin: 44px 0 10px 0;
          font-size: 22px;
          font-weight: normal;
        }

        .iron-heart {
          width: 250px;
          height: 250px;
          position: absolute;
          bottom: -70px;
          left: calc(50% - 125px);
          animation: move 15s linear infinite;
          cursor: pointer;
        }
        
        @keyframes move{
          from{
            transform: rotate(0);
          }
          to{
            transform: rotate(360deg);
          }
        }
      }
    }

    .section {
      .section-title {
        margin: 150px 0 50px;
        font-size: 52px;
        font-weight: 600;
        color: #fff;
        cursor: default;

        &.section-title-yellow > span:hover {
          color: #ddc485;
        }
        &.section-title-blue > span:hover {
          color: #7bf0ff;
        }
        &.section-title-red > span:hover {
          color: #dc5b48;
        }
      }
    }

    .demo-wrapper {
      width: 100%;
      padding: 0 20px;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;

      .demo-title {
        margin: 150px 0 50px;
        font-size: 52px;
        font-weight: 600;
        color: #fff;
        cursor: default;
        & > span {
          &:hover {
            color: #7bf0ff;
          }
        }
      }

      .show-wrapper {
        width: 100%;
        height: 100%;
        min-height: 60vh;
        display: flex;
    
        .show-aside {
          width: 180px;
        }
    
        .show-main {
          width: calc(100% - 180px);
          overflow: scroll;
          scrollbar-width: none; // 清除firefox滚动条
        }
      }
    }

    .friend-wrapper {
      margin: 0 auto;
      padding: 160px 0 0;
      height: 700px;
      width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      font-weight: bold;
      background-image: url('~@/assets/myfriendsbg.jpg');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;

      .friend-title {
        font-size: 52px;
        cursor: default;
        & > span {
          &:hover {
            color: #dc5b48;
          }
        }
      }
      .desc {
        margin: 24px 0 10px 0;
        font-size: 22px;
        font-weight: normal;
      }

      .person {
        position: absolute;
        transform: scale(1);
        transition: all 0.5s;

        &.person-ljy {
          left: 290px;
          bottom: 139px;
        }

        &.person-yzf {
          left: 364px;
          bottom: 134px;
        }

        &.person-lsl {
          left: 424px;
          bottom: 161px;
        }

        &.person-pyz {
          left: 461px;
          bottom: 160px;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    & > footer {
      padding: 20px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }
</style>
