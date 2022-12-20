<template>
  <div>
    <CoolNav />
    <div class="home-main">
      <div class="slogan-wrapper">
        <div class="slogan">tinyo {{cursorValue}}</div>
        <div class="desc">
          · 无论何时，开心万岁
        </div>
        <img src="@/assets/ironheart.png" class="iron-heart" @click="sloganFlash" />
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
      <div class="desc-wrapper"> 
        <div class="desc-title">认真且怂，从一而终</div>
        <div class="desc-desc">2e4ong "是这样的"</div>
        <!-- 2022 -> 跨年(河源/烟花/烧烤/UNo/倒数/万绿湖/红烧芋头) -> -->
        <!-- <div class="desc-main">
          {
            this.state.myDesc.map(item => (
              <div key={item.title}>
                {
                  item.title
                }
              </div>
            ))
          }
        </div> -->
      </div>
    </div>
  </div> 
</template>

<script>
import CoolNav from '@/components/coolNav.vue'
import CoolAside from '@/components/coolAside.vue'
import MacWindow from '@/components/macWindow.vue'

export default {
  components: { CoolNav, CoolAside, MacWindow },
  data () {
    return {
      cursorValue: ''
    }
  },
  mounted () {
    this.sloganFlash()
  },
  methods: {
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
    padding: 20px;
    min-width: 1200px;
    color: #fff;
    background-color: #000;

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

      .slogan {
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
      .desc {
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

    .desc-wrapper {
      width: 100%;
      padding: 0 20px;
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .desc-title {
        font-size: 42px;
        font-weight: 600;
      }

      .desc-desc {
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 350;
      }

      .desc-main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
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
      background-image: url('~@/assets/fbg.jpg');
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
  }
</style>
