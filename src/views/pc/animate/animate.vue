<template>
  <div class="animate-container">
    <main>
      <section class="section-first" :style="sectionFirstFontStyle">
        往下滚动试试
      </section>
      <section class="section-second" :style="sectionSecondFontStyle">
        12312312
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
      sectionFirstFontStyle: {
        fontSize: '12px',
        color: 'red',
        transform: 'scale(1) rotate(0deg)',
        opacity: 1
      },
      sectionSecondFontStyle: {
        opacity: 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchWindowScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.watchWindowScroll);
  },
  methods: {
    watchWindowScroll(e) {
      const { scrollTop, clientHeight } = document.documentElement;
      console.log('scrollTop', scrollTop);
      console.log('clientHeight', clientHeight);

      if (scrollTop === 0) {
        this.sectionFirstFontStyle.fontSize = '12px'
      }
      // 0 - 500 从12放大到36
      if (scrollTop > 0 && scrollTop < 500) {
        this.sectionFirstFontStyle.fontSize = (scrollTop / 500) * 36 + 12 + 'px'
        this.sectionFirstFontStyle.transform = 'scale(1) rotate(0deg)'
      }
      if (scrollTop > 500 && scrollTop < 1500) {
        const deg = ((scrollTop - 500) / 1000) * 720
        const scale = ((scrollTop - 500) / 1000) * 1 + 1
        const opacity = 1 - ((scrollTop - 500) / 1000) * 1
        const secondOpacity = ((scrollTop - 500) / 1000) * 1
        this.sectionFirstFontStyle.transform = `scale(${scale}) rotate(${deg}deg)`
        this.sectionFirstFontStyle.opacity = opacity
        this.sectionSecondFontStyle.opacity = secondOpacity
      }
      if (scrollTop > 1500) {
        this.sectionFirstFontStyle.transform = `scale(2) rotate(720deg)`
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .animate-container {
    position: relative;
    background-color: #000;

    & > main {
      width: 100%;
      height: 6000px;
      position: relative;

      & > section {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 0px;
        left: 0px;
        transition: all 0.1s;

        &.section-first {
          margin-bottom: 500px;
          // background-image: url('~@/assets/animate/14bg.png');
          // background-size: 100% 100%;
          // background-repeat: no-repeat;
        }
        &.section-second {
          background-image: url('~@/assets/animate/14bg.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }
</style>
