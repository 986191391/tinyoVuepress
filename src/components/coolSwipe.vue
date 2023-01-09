<template>
  <div
    class="cool-swipe"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    @click="onSwipeClick"
  >
    <!-- <div :class="`swipe-img-wrapper ${swipeActive === 0 && 'swipe-img-active'}`">
      <img :src="logo" alt="" />
    </div>
    <div :class="`swipe-img-wrapper ${swipeActive === 1 && 'swipe-img-active'}`">
      <img :src="zrn" alt="" />
    </div>
    <div :class="`swipe-img-wrapper ${swipeActive === 2 && 'swipe-img-active'}`">
      <img :src="logo1" alt="" />
    </div> -->
    <template v-for="(item, index) in data" >
      <div :key="`swipe-${name}-${index}`" :class="`swipe-img-wrapper ${swipeActive === index && 'swipe-img-active'}`">
        <img :src="item" alt="" />
      </div>
    </template>
  </div>
</template>

<script>
import logo from '@/assets/navironman.jpg'
import zrn from '@/assets/zrn.jpeg'
import logo1 from '@/assets/myfriendsbg.jpg'
export default {
  name: 'CoolSwipe',
  props: {
    name: {
      type: String,
      default: 'swipe'
    },
    data: {
      type: Array,
      default: () => []
    },
    delay: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      logo,
      zrn,
      logo1,
      swipeActive: 0,
      timer: null,
    }
  },
  mounted() {
    this.initSwipe()
  },
  methods: {
    initSwipe () {
      this.timer = setInterval(() => {
        console.log('initSwipe')
        if (this.swipeActive >= this.data.length - 1) this.swipeActive = 0
        else this.swipeActive = this.swipeActive + 1
      }, this.delay)
    },
    onSwipeClick (e) {
      console.log('onSwipeClick', e)
      if (this.swipeActive >= this.data.length - 1) this.swipeActive = 0
      else this.swipeActive = this.swipeActive + 1
    },
    onMouseOver () {
      console.log('onMouseOver')
      clearInterval(this.timer)
      this.timer = null
    },
    onMouseLeave () {
      this.initSwipe()
      console.log('onMouseLeave')
    }
  }
}
</script>

<style scoped lang="scss">
  .cool-swipe {
    margin: 0 auto;
    width: 90%;
    height: 500px;
    position: relative;
    cursor: pointer;

    .swipe-img-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      opacity: 0;
      transition: all 1.5s;

      &.swipe-img-active {
        opacity: 1;
      }

      & > img {
        // width: 100%;
        height: 100%;
      }
    }
  }
</style>
