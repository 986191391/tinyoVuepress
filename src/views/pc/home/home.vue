<template>
  <div>
    <div class="home-main">
      <!-- <CoolNav /> -->
      <div class="slogan-wrapper">
        <div class="slogan-title">tinyo {{cursorValue}}</div>
        <div class="slogan-desc">
          · 无论何时，开心万岁
        </div>
        <img src="@/assets/ironheart.png" class="iron-heart" @click="sloganFlash" />
      </div>
      <div class="home-nav-wrapper">
        <div class="home-nav-title">Something Cool</div>
        <div class="home-nav-list">
          <div @click="() => onNavClick('/animate')"><span>小动画</span></div>
          <div @click="() => onNavClick('/viewport')"><span>操作面板</span></div>
          <div @click="() => onNavClick('/board')"><span>敏捷看板</span></div>
          <div @click="() => onNavClick('/author')"><span>关于tinyo</span></div>
          <div @click="() => onNavClick('/threeJs')"><span>threeJS玩具</span></div>
          <div @click="() => onNavClick('/lottery')"><span>抽奖转盘</span></div>
          <div @click="() => onNavClick('/fabric')"><span>fabric画布</span></div>
          <div @click="() => onNavClick('doc')"><span>doc文档</span></div>
        </div>
      </div>
      <div class="demo-wrapper">
        <div class="demo-title">Demo Window</div>
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
      </div>
      <div class="friend-wrapper">
        <div class="slogan">My Friends</div>
        <div class="desc">
          · 无论何时，开心万岁！
        </div>
      </div>
      <footer>Design By 2e4ong</footer>
      <!-- 2022 -> 跨年(河源/烟花/烧烤/UNo/倒数/万绿湖/红烧芋头) -> -->
    </div>
  </div> 
</template>

<script>
import logo from '@/assets/logo.png'
import CoolNav from '@/components/coolNav.vue'
import CoolAside from '@/components/coolAside.vue'
import MacWindow from '@/components/macWindow.vue'

export default {
  components: { CoolNav, CoolAside, MacWindow },
  data () {
    return {
      logo,
      cursorValue: ''
    }
  },
  mounted () {
    this.sloganFlash()
  },
  methods: {
    onNavClick (route) {
      if (route === 'doc') return window.open('http://43.139.113.7:8081/docs/')
      const curPath = this.$route.fullPath
      if (curPath === route) return
      this.$router.push(route)
    },
    sloganFlash () {
      const simulationArr = ['', '', 'with ', 'Play ', '& ', 'Learn']
      let index = 0
      let cursorValue = ''
      const timer = setInterval(() => {
        index++
        if (index === 5) clearInterval(timer)
        cursorValue = `${cursorValue}${simulationArr[index]}`
        this.cursorValue = cursorValue
      }, 300)
    }
  }
}
</script>

<style scoped lang="scss">
  .home-main {
    padding: 0 20px;
    min-width: 1200px;
    color: #fff;
    background-color: #000;

    .cool-nav {
      padding: 10px 0px;
      background-color: #000;
      border-bottom: none;
    }

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
      user-select: none;
      position: relative;

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
        position: absolute;
        bottom: -70px;
        left: calc(50% - 150px);
        animation: move 10s linear infinite;
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

    .home-nav-wrapper {
      width: 100%;
      padding: 0 20px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;

      .home-nav-title {
        margin: 150px 0 0;
        font-size: 52px;
        font-weight: 600;
        color: #fff;
      }

      .home-nav-list {
        display: flex;

        & > div {
          width: 110px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          user-select: none;
          cursor: pointer;

          &:hover {
            color: #ddc485;
            text-decoration: underline;
            background-image: url('~@/assets/navironman.jpg');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
          
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
      min-height: calc(100vh - 80px);
      padding: 200px 0 64px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      font-weight: bold;
      background-image: url('~@/assets/myfriendsbg.jpg');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      user-select: none;

      .slogan {
        font-size: 52px;
      }
      .desc {
        margin: 44px 0 10px 0;
        font-size: 22px;
        font-weight: normal;
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
