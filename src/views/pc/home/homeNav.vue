<template>
  <!-- 导航栏 -->
  <div class="home-animate-nav">
    <div class="home-animate-nav-wrapper"
      :style="{
        width: `${isShowTopNav ? '100%' : '0px'}`
      }"
    >
      <!-- 导航左侧占位 -->
      <span v-show="isShowTopNav" class="animate-left"/>
      <!-- 灵动岛 -->
      <div
        v-show="isShowTopNav"
        class="dynamic-island"
        :style="{ width: `${dynamicIslandWidth}px` }"
      >
        {{dynamicIslandMessage}}
      </div>
      <!-- 导航右侧 -->
      <svg
        v-show="isShowTopNav"
        class="animate-right-svg"
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
        @click="() => onShowNavScreen()"
      >
        <rect fill-rule="evenodd" clip-rule="evenodd" width="22" height="4"></rect>
        <rect y="7" fill-rule="evenodd" clip-rule="evenodd" width="22" height="4"></rect>
        <rect y="14" fill-rule="evenodd" clip-rule="evenodd" width="22" height="4"></rect>
      </svg>
        <!-- @click="isNavScreenShown = true" -->
    </div>
    <section :style="{ visibility: isNavScreenShown ? 'visible' : 'hidden' }" :class="`nav-full-screen ${closeFlag && 'nav-full-screen-closing'}`" >
      
      <div :class="`nav-wrapper ${isNavScreenShown ? 'nav-wrapper-active' : 'nav-wrapper-passive'}`">
        <p @click="() => onNavClick('/animate')">Animate Demo</p>
        <p @click="() => onNavClick('/viewport')">Viewport</p>
        <p @click="() => onNavClick('/board')">Job Board</p>
        <p @click="() => onNavClick('/author')">About Tinyo</p>
        <p @click="() => onNavClick('/threeJs')">ThreeJs Toys</p>
        <p @click="() => onNavClick('/fabric')">Fabric</p>
        <p @click="() => onNavClick('doc')">Tinyo Docs</p>
        <p @click="onCloseNavScreen"><i class="el-icon-plus" /></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    isShowTopNav: {
      type: Boolean,
      default: false
    },
    dynamicIslandWidth: {
      type: Number,
      default: 100
    },
    dynamicIslandMessage: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 导航栏相关变量
      // dynamicIslandWidth: 100,
      // dynamicIslandMessage: '',
      // 以下变量用于顶部导航栏
      closeFlag: false,
      isNavScreenShown: false,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchWindowScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.watchWindowScroll);
  },
  methods: {
    onShowNavScreen () {
      document.body.style.overflow = 'hidden'
      // (this.$refs.homeAnimateNav as HTMLElement).style = `calc(100% - 17px)`
      this.isNavScreenShown = true
    },
    onNavClick (route) {
      if (route === 'doc') return window.open('http://43.139.113.7:8081/docs/')
      const curPath = this.$route.fullPath
      if (curPath === route) return
      this.$router.push(route)
      document.body.style.overflow = 'auto'
    },
    watchWindowScroll () {
      const { scrollTop, clientHeight } = document.documentElement
      this.$emit('update:isShowTopNav', scrollTop >= 100)
      // this.isShowTopNav = scrollTop >= 100
    },
    onCloseNavScreen () {
      if (this.closeFlag) return
      this.closeFlag = true
      setTimeout(() => {
        this.isNavScreenShown = false
        document.body.style.overflow = 'auto'
        setTimeout(() => this.closeFlag = false, 500)
      }, 500)
    }
  }
}
</script>

<style scoped lang="scss">
.nav-full-screen {
  width: 50%;
  height: 75%;
  position: fixed;
  top: 15%;
  left: 25%;
  z-index: 99;
  perspective: 3000;/* 定义透视 */
  -webkit-perspective: 3000;
  perspective-origin: 50% 55.97%;
  transform-origin: 48% 45%;
  transform-style: preserve-3d;

  .nav-wrapper {
    padding: 10px 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #080808;
    transition: all 0.5s;

    &.nav-wrapper-active {
      opacity: 1;
      transform: rotateX(0deg) scale(1, 1);
    }
    &.nav-wrapper-passive {
      opacity: 0;
      transform: rotateX(-50deg) scale(0.8, 1.2);
    }
    & > p {
      margin: 0;
      font-size: 44px;
      font-family: 'Mansalva';
      color: #444;
      transition: all 0.2s;
      cursor: pointer;
      
      .el-icon-plus {
        margin-top: 20px;
        padding: 5px;
        border: 1px solid #444;
        transform: rotate(45deg);
        transition: all 0.3s;
        font-size: 28px;
        color: #444;
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
  }


  &.nav-full-screen-closing {
    .nav-wrapper > p {
      animation-fill-mode: forwards;
      &:nth-child(1) {
        animation: scaleFrames 0.8s linear 0.1s infinite;
      }
      &:nth-child(2) {
        animation: scaleFrames 0.8s linear 0.2s infinite;
      }
      &:nth-child(3) {
        animation: scaleFrames 0.8s linear 0.3s infinite;
      }
      &:nth-child(4) {
        animation: scaleFrames 0.8s linear 0.4s infinite;
      }
      &:nth-child(5) {
        animation: scaleFrames 0.8s linear 0.5s infinite;
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

.home-animate-nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 99;

  .home-animate-nav-wrapper {
    height: 100%;
    transition: all 0.5s;
    background-color: #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    .animate-left {
      margin-left: 20px;
      width: 22px;
      height: 22px;
    }

    .dynamic-island {
      padding: 0 25px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000;
      border: 1px solid #222;
      border-radius: 50px;
      font-size: 12px;
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }

    .animate-right-svg {
      margin-right: 20px;
      fill: #d8d8d8;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        fill: #dc5b48;
      }
    }
  }

}
</style>
