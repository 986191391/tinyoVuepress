<template>
  <div class="lottery-container">
    <CoolNav />
    <main>
      <div class="lottery-main">
        <span class="go-font" @click="goLottery">{{ timer ? '确定确定' : '开始抽奖'}}</span>
        <img class="zhizhen" src="@/assets/lottery/zhizhen.jpg" :style="{ transform: `rotate(${rotateDeg}deg)` }"/>
      </div>
    </main>
  </div>
</template>

<script>
import CoolNav from '@/components/coolNav.vue'

export default {
  components: { CoolNav },
  data () {
    return {
      timer: null,
      rotateDeg: 0,
      lock: false
    }
  },
  computed: {
  },
  methods: {
    goLottery () {
      if (this.lock) return
      let rotateDeg = 0
      if (!this.timer) {
        this.rotateDeg = 0
        this.timer = setInterval(() => {
          if (rotateDeg < 90) {
            this.rotateDeg = rotateDeg += 3
          } else if (rotateDeg > 90 && rotateDeg < 200) {
            this.rotateDeg = rotateDeg += 5
          } else if (rotateDeg > 180 && rotateDeg < 300) {
            this.rotateDeg = rotateDeg += 8
          } else {
            this.rotateDeg = rotateDeg += 10
          }
          console.log('rotateDeg', this.rotateDeg)
        }, 10)
      } else {
        this.lock = true
        setTimeout(() => {
          let stopDeg = Math.ceil(Math.random() * 360)
          let targetDeg = Math.ceil(this.rotateDeg / 360) * 360 + stopDeg
          this.clearTimer()
          this.timer = setInterval(() => {
            console.log('stopDeg', stopDeg)
            console.log('targetDeg', targetDeg)
            console.log('this.rotateDeg=', this.rotateDeg)
            const curVal = targetDeg - this.rotateDeg
            console.log('curVal', curVal)
            if ( curVal === 0) {
              this.clearTimer()
            } else if (curVal > 720) {
              this.rotateDeg = this.rotateDeg + 10
            } else if (curVal > 360 && curVal <= 720 ) {
              this.rotateDeg = this.rotateDeg + 8
            } else if (curVal > 200 && curVal <= 360 ) {
              this.rotateDeg = this.rotateDeg + 8
            } else if (curVal > 50 && curVal <= 200 ) {
              this.rotateDeg = this.rotateDeg + 6
            } else if (curVal > 5 && curVal <= 50) {
              this.rotateDeg = this.rotateDeg + 2
            } else if (curVal > 0 && curVal <= 5) {
              this.rotateDeg = this.rotateDeg + 1
            }
          }, 10)
        }, 2000)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearInterval(this.timer)
        this.lock = false
        this.timer = null
      }
    }
  },
  mounted () {
  } 
}
</script>

<style scoped lang="scss">
  .lottery-container {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .lottery-main {
        width: 500px;
        height: 500px;
        background-image: url('~@/assets/lottery/zhuanpan.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;

        .go-font {
          position: absolute;
          left: calc(50% - 34.3px);
          top: 245px;
          z-index: 2;
          user-select: none;
          cursor: pointer;
        }

        .zhizhen {
          width: 108.6px;
          height: 152.2px;
          position: absolute;
          top: 160px;
          left: calc(50% - 54.3px);
          transform: rotate(0deg);
          // animation: zhizhenrotate 0.5s linear infinite;
          transform-origin: center 98px;
        }
      }

      @keyframes zhizhenrotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
</style>
