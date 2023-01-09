<template>
  <div
    class="cool-swipe"
  >
    <template v-for="(item, index) in data" >
      <div :key="`swipe-${name}-${index}`" :class="`swipe-img-wrapper ${swipeActive === index && 'swipe-img-active'}`">
        <img
          :src="item"
          alt=""
          @click="onSwipeClick"
          @mouseover="onMouseOver"
          @mouseleave="onMouseLeave"
        />
      </div>
    </template>
    <div class="swipe-doc">
      <template v-for="(itm, idx) in data.length">
        <span
          :key="`swipe-doc-${name}-${idx}`"
          :class="`swipe-doc-itm ${swipeActive === idx && 'swipe-doc-itm-active'}`"
          @mouseover="onMouseOver"
          @mouseleave="onMouseLeave"
          @click="() => onSwipeDocClick(idx)"
        />
      </template>
    </div>
  </div>
</template>

<script>
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
      default: 3000
    }
  },
  data () {
    return {
      swipeActive: 0,
      timer: null,
    }
  },
  mounted() {
    this.initSwipe()
  },
  destroyed() {
    console.log('destory111')
    if (!this.timer) return
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    initSwipe () {
      this.timer = setInterval(() => {
        if (this.swipeActive >= this.data.length - 1) this.swipeActive = 0
        else this.swipeActive = this.swipeActive + 1
      }, this.delay)
    },
    onSwipeClick (e) {
      if (this.swipeActive >= this.data.length - 1) this.swipeActive = 0
      else this.swipeActive = this.swipeActive + 1
    },
    onSwipeDocClick (index) {
      this.swipeActive = index
    },
    onMouseOver () {
      clearInterval(this.timer)
      this.timer = null
    },
    onMouseLeave () {
      this.initSwipe()
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
        height: 100%;
        cursor: pointer;
      }
    }

    .swipe-doc {
      width: 100%;
      height: 30px;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .swipe-doc-itm {
        width: 5px;
        height: 5px;
        background-color: #fff;
        transform: scale(1);

        &:not(:last-child) {
          margin-right: 10px;
        }

        &.swipe-doc-itm-active {
          transform: scale(1.6);
        }

        &:hover {
          transform: scale(1.6);
          background-color: #dc5b48;
          cursor: pointer;
        }
      }
    }
  }
</style>
