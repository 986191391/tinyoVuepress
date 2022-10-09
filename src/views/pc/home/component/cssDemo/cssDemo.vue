<template>
  <div class="css-container">
    <el-card v-for="(itm, idx) in getCardList" :key="`card-${idx}`" :class="itm.className">
      <div slot="header" class="clearfix">
        <span>{{itm.title}}</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <components :is="itm.componentName" />
    </el-card>
  </div>
</template>

<script>
import CssLoading from './cssComponent/cssLoading.vue'
import Triangle from './cssComponent/triangle.vue'
import Lineargradient from './cssComponent/lineargradient.vue'
import PublicCircle from './cssComponent/publicCircle.vue'
import TransferCard from './cssComponent/transferCard.vue'
import WaterDrop from './cssComponent/waterDrop.vue'
import CursorFont from './cssComponent/cursorFont.vue'

export default {
  components: { CssLoading, Triangle, Lineargradient, PublicCircle, TransferCard, WaterDrop, CursorFont },
  data () {
    return {
    }
  },
  computed: {
    getCardList () {
      return [{
        title: 'CSS 实现loading',
        className: 'loading-card',
        componentName: 'CssLoading',
      }, {
        title: 'CSS 画三角形',
        className: 'triangle-card',
        componentName: 'Triangle',
      }, {
        title: 'CSS 渐变',
        className: 'lineargradient-card',
        componentName: 'Lineargradient',
      } , {
        title: '伪元素实现公用小圆点',
        className: 'element-card',
        componentName: 'PublicCircle',
      }, {
        title: '3D翻转',
        className: 'third-card',
        componentName: 'TransferCard',
      }, {
        title: '水滴',
        className: 'drop-card',
        componentName: 'WaterDrop',
      } , {
        title: '酷炫模拟光标',
        className: 'cursor-card',
        componentName: 'CursorFont',
      }]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .css-container {
    padding: 1.2rem;
    display: grid;
    grid-template-rows: repeat(auto-fill, 250px);
    grid-template-columns: repeat(auto-fill, 170px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    .el-card {
      height: 250px;
      display: flex;
      flex-direction: column;

      ::v-deep .el-card__header {
        padding: 10px 0;
      }

      ::v-deep .el-card__body {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
    }
  }
</style>
