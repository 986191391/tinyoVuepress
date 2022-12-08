<template>
  <div>
    <CoolNav />
    <div class="home-main">
      <div class="slogan-wrapper">
        <div class="slogan-left">
          <div>Play </div>
          <div class="learn">Learn</div>
          <div class="desc">
            无论何时，开心万岁！
          </div>
          <div class="more">了解一下 &nbsp;</div>
        </div>
        <div class="slogan-right">
          <img src="@/assets/hero.svg" />
        </div>
      </div>
      <div class="demo-wrapper">
        <div class="demo-title">Demo Window</div>
        <div class="demo-desc">2e4ong 的玩具</div>
        <MacWindow>
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
      <div class="desc-wrapper"> 
        <div class="desc-title">认真且怂，从一而终</div>
        <div class="desc-desc">2e4ong "是这样的"</div>
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
    return {}
  }
}
</script>

<style scoped lang="scss">
  .home-main {
    padding: 20px;
    min-width: 1200px;

    .slogan-wrapper {
      padding: 64px 0;
      display: flex;

      .slogan-left {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 72px;
        font-weight: bold;

        .learn {
          color: #ff7900;
        }

        .desc {
          margin: 44px 0 10px 0;
          font-size: 22px;
          font-weight: normal;
        }

        .more {
          padding: 5px 10px;
          font-size: 22px;
          border-radius: 4px;
          font-weight: normal;
          cursor: pointer;

          &:hover {
            background: #f2f2f2;
          }
        }
      }

      .slogan-right {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .demo-wrapper {
      width: 100%;
      padding: 0 20px;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .demo-title {
        font-size: 48px;
        font-weight: 600;
      }

      .demo-desc {
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 350;
      }

      .show-wrapper {
        width: 100%;
        height: 100%;
        min-height: 70vh;
        display: flex;
    
        .show-aside {
          width: 180px;
        }
    
        .show-main {
          width: calc(100% - 180px);
          height: 100vh;
          overflow: scroll;
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
  }
</style>
