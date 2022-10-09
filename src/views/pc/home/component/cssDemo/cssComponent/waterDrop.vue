<template>
  <div class="drop-container">
    <div class="drop drop1" />
    <div class="drop drop2" /> 
    <div class="drop drop3" />
    <div class="water">80%</div>
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
  .drop-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: contrast(30);
    position: relative;
    background-color: #333;

    .drop {
      width: 50px;
      height: 50px;
      background-color: #fff;
      border-radius: 50%;
      filter: blur(20px);
      z-index: 1;

      &.drop1 {
        transform: translateY(-450px);
        animation: dropfirst 2s ease-in 0.25s infinite;
      }

      &.drop2 {
        transform: translateY(-400px);
        animation: dropsecond 2s ease-in 0.35s infinite;
      }

      &.drop3 {
        transform: translateY(-200px);
        animation: dropthird 2s ease-in 0.1s infinite;
      }
    }

    .water {
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      bottom: 20px;
      z-index: 9;
      font-weight: 500;
      font-size: 20px;
      filter: blur(20px);
    }
  }

  // 最上面的
  @keyframes dropfirst {
    0% {
      transform: translateY(-250px) scale(0);
    }
    80%, 100% {
      transform: translateY(100px) scale(0.8);
    }
  }

  // 中间的
  @keyframes dropsecond {
    0% {
      transform: translateY(-200px) scale(0);
    }
    70%, 100% {
      transform: translateY(20px) scale(0.9);
    }
  }

  // 最下面的
  @keyframes dropthird {
    0% {
      transform: translateY(-200px) scale(0);
    }
    60%, 100% {
      transform: translateY(-20px) scale(0.9);
    }
  }
</style>
