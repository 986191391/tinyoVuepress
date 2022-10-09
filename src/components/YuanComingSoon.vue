<template>
  <div class="yuan-coming-soon">
    <div class="coming-soon-wrapper">
      <img
        src="@/assets/public/emptyIcon.png"
        class="yuan-icon"
      />
      <span class="comming-soon-text">敬请期待</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuanComingSoon'
}
</script>

<style scoped lang="scss">
  .yuan-coming-soon {
    padding: 250px 0 0 490px;
    width: 100%;
    // height: 100%;
    display: flex;
    // justify-content: center;
    // align-items: center;
    user-select: none;

    .coming-soon-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 17px;
      font-family: PingFang SC;
      color: #ffffff;

      .yuan-icon {
        width: 100px;
        height: 100px;
      }

      .comming-soon-text {
        margin-top: 16px;
        line-height: 25.5px;
        letter-spacing: 14px;
        margin-right: -15px;
        font-weight: 300;
      }
    }
  }
</style>
