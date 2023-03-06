<template>
  <div class="home-main">
    <HomeNavWindow
      :isShowTopNav.sync="isShowTopNav"
      :dynamicIslandWidth.sync="dynamicIslandWidth"
      :dynamicIslandMessage.sync="dynamicIslandMessage"
    />
    <section class="top-section" :style="topSectionStyle">
      <div class="slogan-wrapper">
        <div class="slogan-title">tinyo {{cursorValue}}</div>
        <div class="slogan-desc" @click="() => onDynamicTips('无论何时，开心万岁')">· 无论何时，开心万岁</div>
        <img src="@/assets/ironheart.png" :style="ironHeartStyle" class="iron-heart" @click="sloganFlash" />
      </div>
    </section>
    <section class="section">
      <div class="section-title section-title-yellow">
        <span>Beer </span><span> and </span><span>Skittles</span>
      </div>
      <div class="section-desc" @click="() => onDynamicTips('不仅吃喝，还有玩乐')">· 不仅吃喝，还有玩乐</div>
      <CoolSwipe
        name="beerandskittles"
        :data="[swipe1, swipe2, swipe3, swipe4, swipe5, swipe6, swipe8]"
      />
    </section>
    <section class="section demo-wrapper">
      <div class="section-title section-title-blue">
        <span>D</span><span>e</span><span>m</span><span>o</span><span> W</span><span>i</span><span>n</span><span>d</span><span>o</span><span>w</span>
      </div>
      <div class="section-desc" @click="() => onDynamicTips('学无止境')">· 学无止境</div>
      <MacWindow windowWidth="80%">
        <div class="show-wrapper">
          <div class="show-aside">
            <CoolAside />
          </div>
          <div class="show-main">
            <router-view :onDynamicTips="onDynamicTips"/>
          </div>
        </div>
      </MacWindow>
    </section>
    <!-- <div class="section friend-wrapper">
      <div class="section-title section-title-red">
        <span>My </span><span>F</span><span>r</span><span>i</span><span>e</span><span>n</span><span>d</span><span>s</span>
      </div>
      <div class="section-desc" @click="() => onDynamicTips('平安喜乐，万事顺意')">· 平安喜乐</div>
      <img src="@/assets/homeperson/ljy.png" alt title="1+1" class="person person-ljy" @click="() => onDynamicTips('这位是一加一，tinyo的小可爱！！~')" />
      <img src="@/assets/homeperson/yzf.png" alt title="tinyo" class="person person-yzf" @click="() => onDynamicTips('hi！ i am tinyo！')" />
      <img src="@/assets/homeperson/lsl.png" alt title="狼孩lian" class="person person-lsl" @click="() => onDynamicTips('大家好，我是练哥，你猜我说的话是不是真的？')" />
      <img src="@/assets/homeperson/pyz.png" alt title="珠珠" class="person person-pyz" @click="() => onDynamicTips('这位是练哥的珠珠~')" />
      <img src="@/assets/homeperson/zhg.png" alt title="花样美男帕尼仔" class="person person-zhg" @click="() => onDynamicTips('花样美男，我永远的男神欧巴概概！')" />
      <img src="@/assets/homeperson/hry.png" alt title="ria huang" class="person person-hry" @click="() => onDynamicTips('这位是ria huang，一紧张就想拉屎!')" />
      <img src="@/assets/homeperson/hjz.png" alt title="猴" class="person person-hjz" @click="() => onDynamicTips('早睡早起不熬夜加锻炼猴')" />
      <img src="@/assets/homeperson/fwx.png" alt title="固执王" class="person person-fwx" @click="() => onDynamicTips('大家好，我是固执王，其他没什么，就是嘴有点硬')" />
      <img src="@/assets/homeperson/cjx.png" alt title="娴" class="person person-cjx" @click="() => onDynamicTips('这位是爱玩桌游的娴！')" />
      <img src="@/assets/homeperson/xg.png" alt title="小哥" class="person person-xg" @click="() => onDynamicTips('娴的神秘男孩小哥boy~')" />
    </div> -->
    <footer>Design By 2e4ong</footer>
    <!-- 2022 -> 跨年(河源/烟花/烧烤/UNo/倒数/万绿湖/红烧芋头) -> -->
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

import HomeNavWindow from './homeNav.vue'
import CoolNav from '@/components/coolNav.vue'
import CoolAside from '@/components/coolAside.vue'
import MacWindow from '@/components/macWindow.vue'
import CoolSwipe from '@/components/coolSwipe.vue'

import { getStrLen } from '@/utils/utils'

export default {
  components: { HomeNavWindow, CoolNav, CoolAside, MacWindow, CoolSwipe },
  data () {
    return {
      swipe1, swipe2, swipe3, swipe4, swipe5, swipe6, swipe7, swipe8,
      // 导航栏相关变量
      dynamicIslandWidth: 100,
      dynamicIslandMessage: '',
      // 以下用于控制第一屏文字的显示
      cursorValue: '',
      sloganModel: true, // true 显示learn&play; flase显示is cool;
      // 以下变量用于顶部导航栏
      isShowTopNav: false,
      // closeFlag: false,
      // isNavScreenShown: false,
      topSectionStyle: {
        // transform: 'scale(1)',
        opacity: 1
      },
      ironHeartStyle: {
        transform: 'scale(1) rotate(0deg)',
      },
    }
  },
  methods: {
    onDynamicTips (tips) {
      // 导航栏没显示时不触发 正在触发时不触发
      if (!this.isShowTopNav || this.dynamicIslandMessage) return
      this.dynamicIslandMessage = tips;
      let len = getStrLen(tips)
      this.dynamicIslandWidth = len > 12 ? len * 7.5 : 100;
      setTimeout(() => { 
        this.dynamicIslandMessage = ''
        this.dynamicIslandWidth = 100
      }, 1500)
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
  }
}
</script>

<style scoped lang="scss">

  .home-main {
    min-width: 1200px;
    color: #fff;
    background-color: #000;

    ::selection {
      background-color: #a1a1a1;
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
        margin: 150px 0 0;
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
      .section-desc {
        margin: 0 0 20px;
        font-size: 18px;
        font-weight: normal;
        color: #fff;
      }
    }

    .demo-wrapper {
      width: 100%;
      padding: 0 20px;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;

      .show-wrapper {
        width: 100%;
        height: 100%;
        min-height: 60vh;
        display: flex;
        overflow: hidden;
    
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
      padding: 20px 0 0;
      height: 700px;
      width: 1200px;
      color: #fff;
      background-color: #000;
      // background-image: url('~@/assets/myfriendsbg.jpg');
      // background-size: contain;
      // background-position: center;
      // background-repeat: no-repeat;
      position: relative;

      .person {
        position: absolute;
        transform: scale(1);
        transition: all 0.5s;
        cursor: pointer;

        &.person-ljy {
          left: 289px;
          bottom: 60px;
          z-index: 2;
        }

        &.person-yzf {
          left: 365px;
          bottom: 59px;
          z-index: 3;
        }

        &.person-lsl {
          left: 394px;
          bottom: 91px;
          z-index: 1;
        }

        &.person-pyz {
          left: 461px;
          bottom: 79px;
          z-index: 3;
        }

        &.person-zhg {
          left: 541px;
          bottom: 72px;
          z-index: 2;
        }

        &.person-hry {
          left: 598px;
          bottom: 61px;
          z-index: 3;
        }

        &.person-hjz {
          left: 658px;
          bottom: 66px;
          z-index: 2;
        }

        &.person-fwx {
          left: 729px;
          bottom: 54px;
          z-index: 3;
        }

        &.person-cjx {
          left: 826px;
          bottom: 23px;
          z-index: 3;
        }

        &.person-xg {
          left: 880px;
          bottom: 41px;
          z-index: 2;
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
