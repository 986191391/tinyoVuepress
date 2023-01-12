<template>
  <div class="animate-container">
    <main class="main-first">
      <section class="section section-first" :style="sectionFirstFontStyle">
        · 往下滚动,了解tinyo更多
      </section>
    </main>
    <main class="main-second">
      <section class="section section-second" :style="sectionSecondFontStyle">
        <div :style="greetStyle">大家好！</div>
        <div :style="iamtinyoFontStyle">我是tinyo!</div>
      </section>
      <section class="section-second-bg" />
    </main>
    <main class="main-third">
      <section class="section-third-bg" />
      <section class="section section-third">
        <h2 class="ilike" :style="ilikeStyle">我喜欢</h2>
        <img src="@/assets/animate/whiteman.png" class="whiteman" :style="whitemanStyle" />
        <span :style="singStyle" class="singStyle">唱</span>
        <span :style="jumpStyle" class="jumpStyle">跳?</span>
        <span :style="rapStyle" class="rapStyle">rap?</span>
        <span :style="basketballStyle" class="basketballStyle">篮球</span>
      </section>
    </main>
    <main class="main-fourth">
      4444
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
      sectionFirstFontStyle: {
        fontSize: '12px',
        color: '#ddc485',
        transform: 'scale(1) rotate(0deg)',
        opacity: 1
      },
      // 第二部分变量
      sectionSecondFontStyle: {
        opacity: 1
      },
      greetStyle: {
        transform: `translateX(-100px)`,
        opacity: 0
      },
      iamtinyoFontStyle: {
        transform: `translateX(-80px)`,
        opacity: 0
      },
      // 第三部分变量
      ilikeStyle: {
        transform: `rotateX(-101.48deg) scale(1.5, 1.9)`,
        visibility: 'hidden'
      },
      whitemanStyle: {
        transform: `translateY(50px)`,
        opacity: 0
      },
      singStyle: {
        transform: `skewX(25deg) scale(3.5) translate(-65px, -65px)`,
        opacity: 0
      },
      jumpStyle: {
        transform: `skewX(20deg) scale(3.5) translate(-15px, -110px)`,
        opacity: 0
      },
      rapStyle: {
        transform: `skewX(-20deg) scale(3.5) translate(10px, -120px)`,
        opacity: 0
      },
      basketballStyle: {
        transform: `skewX(-25deg) scale(3.5) translate(50px, -75px)`,
        opacity: 0
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
    watchWindowScroll(e) {
      const { scrollTop, clientHeight } = document.documentElement;
      console.log('scrollTop', scrollTop);
      // console.log('clientHeight', clientHeight);

      if (scrollTop === 0) {
        this.sectionFirstFontStyle.fontSize = '12px'
      }
      // 0 - 500 fontsize从12放大到48
      if (scrollTop > 0 && scrollTop < 500) {
        // (scrollTop / 500): 屏幕滚动的比例
        this.sectionFirstFontStyle.fontSize = (scrollTop / 500) * 36 + 12 + 'px'
        this.sectionFirstFontStyle.transform = 'scale(1) rotate(0deg)'
      }
      // 500 - 1500
      // 第一部分: 旋转两圈, 透明度由1->0
      // 后面预留100px
      if (scrollTop > 500 && scrollTop < 1600) {
        // (scrollTop - 500) / 1000): 屏幕滚动的比例
        const deg = ((scrollTop - 500) / 1000) * 720
        const scale = ((scrollTop - 500) / 1000) * 1 + 1
        const opacity = 1 - ((scrollTop - 500) / 1000) * 1
        this.sectionFirstFontStyle.transform = `scale(${scale}) rotate(${deg}deg)`
        this.sectionFirstFontStyle.opacity = opacity
      }
      // 1500 - 2500
      if (scrollTop > 1500 && scrollTop < 2000) {
        const secondOpacity = ((scrollTop - 1500) / 500) * 1 // (scrollTop - 1500) / 500): 屏幕滚动的比例
      }
      // 1850 - 2650
      // 第二部分: 大家好的文字位置x方向从 -100 -> 0, 透明度由0->1
      if (scrollTop > 1850 && scrollTop < 2650) { // scrollTop > 1850: 预留了100px,避免滚动太快透明度不变为0的问题,下面的逻辑代码不预留
        const greetTranslatex = 100 - ((scrollTop - 1950) / 800) * 100  // (scrollTop - 1950) / 800): 屏幕滚动的比例, 100: 原始距离到目标距离的长度
        const greetOpacity = ((scrollTop - 1950) / 800) * 1 // (scrollTop - 1950) / 800): 屏幕滚动的比例
        this.greetStyle.transform = `translateX(-${greetTranslatex}px)`
        this.greetStyle.opacity = greetOpacity
      }
      // 1950 - 2750
      // 第二部分: 我是tinyo的文字位置x方向从 -80 -> 0, 透明度由0->1
      if (scrollTop > 1950 && scrollTop < 2750) { // scrollTop > 1950: 预留了100px,避免滚动太快透明度不变为0的问题,下面的逻辑代码不预留
        const tinyoTranslatex = 80 - ((scrollTop - 2050) / 800) * 80  // (scrollTop - 2050) / 800): 屏幕滚动的比例, 80: 原始距离到目标距离的长度
        const tinyoOpacity = ((scrollTop - 2050) / 800) * 1 // (scrollTop - 2050) / 800): 屏幕滚动的比例
        this.iamtinyoFontStyle.transform = `translateX(-${tinyoTranslatex}px)`
        this.iamtinyoFontStyle.opacity = tinyoOpacity
      }
      // 空白空间区域有图片过渡
      // 4200 - 4400
      // 第三部分: 我喜欢文字X轴旋转-101.48->-65 放大倍数 1->1.2 
      if (scrollTop > 4100 && scrollTop < 4600) {
        // (scrollTop - 4200) / 400): 屏幕滚动的比例
        this.ilikeStyle.visibility = 'unset'
        if (scrollTop <= 4200) {
          this.ilikeStyle.visibility = 'hidden'
        } else {
          const deg = (((scrollTop - 4200) / 400) * 38) - 101.48 // 38由101.48-65得到 取差数
          this.ilikeStyle.transform = `rotateX(${deg}deg) scale(1.5, 1.9)`
        }
      }
      // 4450 - 4750
      // 前100px后50px是预留 处理opacity问题
      // 第三部分: 卡通人物出现y轴位移50px->0px, 透明度0->1
      if (scrollTop > 4450 && scrollTop < 4750) {
        // (scrollTop - 4550) / 150): 屏幕滚动的比例
        const translateY = 50 - ((scrollTop - 4550) / 150) * 50
        const opacity = ((scrollTop - 4550) / 150)
        this.whitemanStyle.transform = `translateY(${translateY}px)`
        this.whitemanStyle.opacity = opacity
      }

      // 4500 - 5100 
      // 唱跳rap篮球文字按顺序显示 
      // 前150后50px是预留
      if (scrollTop > 4500 && scrollTop < 4800) {
        const opacity = ((scrollTop - 4650) / 150)
        this.singStyle.opacity = opacity
      }
      if (scrollTop > 4600 && scrollTop < 4900) {
        const opacity = ((scrollTop - 4750) / 150)
        this.jumpStyle.opacity = opacity
      }
      if (scrollTop > 4700 && scrollTop < 5000) {
        const opacity = ((scrollTop - 4850) / 150)
        this.rapStyle.opacity = opacity
      }
      if (scrollTop > 4800 && scrollTop < 5100) {
        const opacity = ((scrollTop - 4950) / 150)
        this.basketballStyle.opacity = opacity
      }

      // 5200 - 5800
      if (scrollTop > 5200 && scrollTop < 5800) {
        
      }
      // 前预留文字最开始会跳位
      // 后100预留
      // 唱跳rap篮球位移到人中心
      if (scrollTop > 5200 && scrollTop < 5500) {
        // ((scrollTop - 5200) / 200): 屏幕滚动的比例
        // 原始位置: skewX(25deg) scale(3.5) translate(-65px, -65px)
        // 目标位置: skewX(0deg) scale(1) translate(-10px, -270px)
        const opacity = 1 - ((scrollTop - 5200) / 200)
        const deg = 25 - ((scrollTop - 5200) / 200) * 25          // 25: deg差值
        const scale = 3.5 - ((scrollTop - 5200) / 200) * 2.5      // 2.5 scale差值
        const x = ((scrollTop - 5200) / 200) * 50 - 65            // 50: x的差值  65: 原始x位置
        const y = -65 - ((scrollTop - 5200) / 200) * 170          // 65: 原始x位置 170: y值差值
        this.singStyle.opacity = opacity
        this.singStyle.transform = `skewX(${deg}deg) scale(${scale}) translate(${x}px, ${y}px)`
      }

      if (scrollTop > 5300 && scrollTop < 5600) {
        // ((scrollTop - 5300) / 200): 屏幕滚动的比例
        // 原始位置: skewX(20deg) scale(3.5) translate(-15px, -110px)
        // 目标位置: skewX(0deg) scale(1) translate(-10px, -270px)
        const opacity = 1 - ((scrollTop - 5300) / 200)
        const deg = 20 - ((scrollTop - 5300) / 200) * 20
        const scale = 3.5 - ((scrollTop - 5300) / 200) * 2.5
        const x = ((scrollTop - 5300) / 200) * 5 - 10
        const y = -110 - ((scrollTop - 5300) / 200) * 160
        this.jumpStyle.opacity = opacity
        this.jumpStyle.transform = `skewX(${deg}deg) scale(${scale}) translate(${x}px, ${y}px)`
      }
    
      if (scrollTop > 5400 && scrollTop < 5700) {
        // ((scrollTop - 5400) / 200): 屏幕滚动的比例
        // 原始位置: skewX(-20deg) scale(3.5) translate(10px, -120px)
        // 目标位置: skewX(0deg) scale(1) translate(-10px, -280px)
        const opacity = 1 - ((scrollTop - 5400) / 200)
        const deg = 20 - ((scrollTop - 5400) / 200) * 20
        const scale = 3.5 - ((scrollTop - 5400) / 200) * 2.5
        const x = 10 - ((scrollTop - 5400) / 200) * 20
        const y = -120 - ((scrollTop - 5400) / 200) * 160
        this.rapStyle.opacity = opacity
        this.rapStyle.transform = `skewX(-${deg}deg) scale(${scale}) translate(${x}px, ${y}px)`
      }

      if (scrollTop > 5500 && scrollTop < 5800) {
        // ((scrollTop - 5500) / 200): 屏幕滚动的比例
        // 原始位置: skewX(-25deg) scale(3.5) translate(50px, -75px)
        // 目标位置: skewX(0deg) scale(1) translate(-15px, -305px)
        const opacity = 1 - ((scrollTop - 5500) / 200)
        const deg = 25 - ((scrollTop - 5500) / 200) * 25
        const scale = 3.5 - ((scrollTop - 5500) / 200) * 2.5
        const x = 50 - ((scrollTop - 5500) / 200) * 65
        const y = -75 - ((scrollTop - 5500) / 200) * 230
        this.basketballStyle.opacity = opacity
        this.basketballStyle.transform = `skewX(-${deg}deg) scale(${scale}) translate(${x}px, ${y}px)`
      }
    
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
        height: 2100px;

        .section-first {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      &.main-second {
        height: 1600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #000;

        .section-second {
          padding: 150px 300px 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #fff;
          text-align: left;
          font-size: 80px;
          // background-image: url('~@/assets/animate/14bg.png');
          // background-size: 100% 100%;
          // background-repeat: no-repeat;
        }
        .section-second-bg {
          width: 100%;
          height: 100vh;
          background-image: url('~@/assets/animate/14bg.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }

      &.main-third {
        height: 3600px;
        background-color: #000;

        .section-third-bg {
          width: 100%;
          height: 100vh;
          background-image: url('~@/assets/animate/14bgreverse.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }

        .section-third {
          padding-top: 150px;
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: center;
          perspective: 1000; /* 定义透视 */
          -webkit-perspective: 1000;
          perspective-origin: 50% 55.97%;
          transform-style: preserve-3d;

          .ilike {
            margin: 0;
            font-size: 100px;
          }

          .whiteman {
            margin-top: 50px;
          }
          .singStyle, .jumpStyle, .rapStyle, .basketballStyle {
            user-select: none;
            &:hover {
              color: #ddc485;
            }
          }
        }
      }
    }
  }
</style>
