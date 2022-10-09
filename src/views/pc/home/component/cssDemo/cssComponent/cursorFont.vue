<template>
  <div class="cursor">{{cursorValue}}</div>
</template>

<script>

export default {
  data () {
    return {
      cursorValue: ''
    }
  },
  mounted () {
    this.onFlash()
  },
  methods: {
    onFlash () {
      const simulationArr = ['', '', '2', 'e', '4', 'o', 'ng']
      let index = 0
      let cursorValue = ''
      const timer = setInterval(() => {
        index++
        if (index === 6) clearInterval(timer)
        cursorValue = `${cursorValue}${simulationArr[index]}`
        this.cursorValue = cursorValue
      }, 300)
    }
  }
}
</script>

<style scoped lang="scss">
  .cursor {
    position: relative;
    font-size: 24px;
    &::after {
      content: '';
      width: 1.5px;
      height: 100%;
      position: absolute;
      right: -4px;
      background-color: #000;
      animation: flash 1.5s linear infinite;
    }
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
</style>
