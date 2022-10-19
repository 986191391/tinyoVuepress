<template>
  <div ref={ref} class="action-bar-container" >
    <div class="bar-left">
      <i class="el-icon-back" title="返回" @click="onBack" />
    </div>
    <div class="bar-right">
      <i
        class="el-icon-monitor"
        :title="bestView ? '关闭最佳视角' : '开启最佳视角'"
        :style="{color: bestView ? '#46a6ff' : '#a1a1a1', backgroundColor: bestView ? '#eee' : ''}"
        @click="onSwitchBestView"
      />
      <i class="el-icon-remove-outline" title="缩小" @click="onReduceScale" />
      <div class="scale-value">{{(scaleValue * 100).toFixed(0)}}%</div>
      <i class="el-icon-circle-plus-outline add-btn" title="放大" @click="onAddScale" />
      <i class="el-icon-crop default-position-btn" title="恢复默认" @click="onSetVpAttrDefault" />
      <i class="el-icon-printer" title="打印" @click="printResume" />
      <i
        class="el-icon-edit-outline"
        :title="editable ? '关闭编辑' : '开启编辑'"
        :style="{color: editable ? '#46a6ff' : '#a1a1a1', backgroundColor: editable ? '#eee' : ''}"
        @click="onSwitchEdit"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ActionBar',
  components: { },
  props: {
    printResume: {
      type: Function,
      default: () => {}
    },
    scaleValue: {
      type: Number,
      default: 0
    },
    bestView: {
      type: Boolean,
      default: false
    },
    onReduceScale: {
      type: Function,
      default: () => {}
    },
    onAddScale: {
      type: Function,
      default: () => {}
    },
    onSwitchEditStatus: {
      type: Function,
      default: () => {}
    },
    onSetVpAttrDefault: {
      type: Function,
      default: () => {}
    },
    onSwitchBestView: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      editable: false
    }
  },
  methods: {
    onBack () {
      this.$router.back()
    },
    onSwitchEdit () {
      this.editable = !this.editable
      onSwitchEditStatus(!this.editable)
    }
  }
}
</script>

<style scoped lang="scss">
  .action-bar-container {
    position: sticky;
    top: 0;
    left: 0;
    margin-bottom: 0.5rem;
    width: 100%;
    height: 50px;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    z-index: 1;
    user-select: none;

    .edit-action {
      font-size: 13px;
      .ant-select .anticon {
        width: auto;
        height: auto;
      }
    }

    .bar-right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .scale-value {
        font-size: 0.8rem;
        color: #666;
      }
    }

    i {
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: #a1a1a1;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        background-color: #eee;
      }
    }
  }
</style>
