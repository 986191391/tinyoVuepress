<template>
  <div class="music-box-wrapper">
    <div class="music-box">
      <img src="@/assets/stamp2.jpg" />
      <img src="@/assets/stamp2.jpg" />
      <img src="@/assets/stamp2.jpg" />
      <img src="@/assets/stamp2.jpg" />
      <img src="@/assets/stamp2.jpg" />
      <img src="@/assets/stamp2.jpg" />
    </div>
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
  .music-box-wrapper {
    perspective: 100%;/* 定义透视 */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    //父盒子
    .music-box{
      position: relative;//相对定位
      width: 200px;
      height: 200px;
      transform-style: preserve-3d;
      animation: move 10s linear infinite;
      // background: url(../../../assets/stamp2.jpg) no-repeat;
    
      //子盒子img
      img {
        position: absolute;//绝对定位
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        // background: url(../../../assets/stamp2.jpg) no-repeat

        /* z轴移动200个像素单位,选中第一个盒子*/
        &:nth-child(1){
          transform: translateZ(180px);
        }
        &:nth-child(2){
          transform: rotateY(60deg) translateZ(180px);
        }
        &:nth-child(3){
          transform: rotateY(120deg) translateZ(180px);
        }
        &:nth-child(4){
          transform: rotateY(180deg) translateZ(180px);
        }
        &:nth-child(5){
          transform: rotateY(240deg) translateZ(180px);
        }
        &:nth-child(6){
          transform: rotateY(300deg) translateZ(180px);
        }
      }
    }


    /* 当鼠标经过盒子的时候，停止旋转 */
    &:hover {
      // animation-play-state: paused;/* 停止动画 */

      .music-box{
        animation: move 6s linear infinite;
        img {
          &:nth-child(1){
            transform: translateZ(300px);
          }
          &:nth-child(2){
            transform: rotateY(60deg) translateZ(300px);
          }
          &:nth-child(3){
            transform: rotateY(120deg) translateZ(300px);
          }
          &:nth-child(4){
            transform: rotateY(180deg) translateZ(300px);
          }
          &:nth-child(5){
            transform: rotateY(240deg) translateZ(300px);
          }
          &:nth-child(6){
            transform: rotateY(300deg) translateZ(300px);
          }
        }
      }
    }
  }
  
  /* 定义一个动画效果 */
  @keyframes move{
    from{
      transform: rotateY(0) rotateX(0);
    }
    to{
      transform: rotateY(360deg) rotateX(360deg);/* 沿着y轴移动360度 */
    }
  }
</style>
