<template>
  <div class="lottery-container">
    <CoolNav />
    <main>
      <div class="lottery-main">
        <img class="zhizhen" src="@/assets/lottery/zhizhen.jpg" />
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
    }
  },
  computed: {
  },
  methods: {
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

        .zhizhen {
          width: 108.6px;
          height: 152.2px;
          position: absolute;
          top: 160px;
          left: calc(50% - 54.3px);
          transform: rotate(20deg);
          transform-origin: center 98px;
        }
      }
    }
  }
</style>
