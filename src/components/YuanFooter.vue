<template>
  <div class="yuanjihua-footer">
    <div class="web-footer">
      @2022 深圳行者数学艺术有限公司官网 版权所有. 粤ICP备2022071585号-1
    </div>
    <div class="mobile-footer">
      <div>@2022 深圳行者数字艺术有限公司官网 版权所有</div>
      <div>粤ICP备2022071585号-1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuanFooter'
}
</script>

<style scoped lang="scss">
  .yuanjihua-footer {
    .web-footer {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 10px;
      line-height: 22px;
      letter-spacing: 0.1em;
      font-family: 'PingFang SC';
    }

    .mobile-footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      color: #fff;
      font-weight: 200;
      line-height: 14px;
      letter-spacing: 0.1em;
      font-family: 'PingFang SC';
    }
  }

  @media screen and (min-width: 600px) {
    .yuanjihua-footer {
      .web-footer {
        display: flex;
      }
      .mobile-footer {
        display: none;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .yuanjihua-footer {
      .web-footer {
        display: none;
      }
      .mobile-footer {
        display: flex;
      }
    }
  }
</style>
