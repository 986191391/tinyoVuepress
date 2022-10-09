<template>
  <div class="third">
    <div class="reverse">我是背面</div>
    <div class="front">我是正面</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .third {
    width: 170px;
    height: 110px;
    position: relative;
    animation: rotateYY 4s linear infinite;
    transform-style: preserve-3d;
    transform: rotateY(0deg);

    & > div {
      width: 170px;
      height: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      font-size: 24px;
      backface-visibility: hidden; // 隐藏背面
      transition: 1.5s all linear;
    }

    .front {
      background-color: purple;
      color: #fff;
      transform: rotateY(0deg);
    }

    .reverse {
      background-color: pink;
      transform: rotateY(180deg);
    }
  }

  @keyframes rotateYY {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
</style>
