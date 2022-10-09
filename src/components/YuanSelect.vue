<template>
  <el-select
    class="yuan-select"
    popper-class="yuan-select-poper"
    v-model="value"
    clearable
    :placeholder="placeholder"
  >
    <el-option
      v-for="item in selectOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'yuanSelect',
  props: {
    selectOptions: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
    // width: {
    //   type: Number,
    //   default: 135
    // },
    // height: {
    //   type: Number,
    //   default: 50
    // }
  }
}
</script>

<style scoped lang="scss">
  .yuan-select {
    width: 135px;
    height: 50px;

    ::v-deep .el-input__inner {
      border: 1px solid rgba(255, 255, 255, 0.2);
      &:focus {
        border-color: #fff;
      }
    }

    ::v-deep .el-input {
      height: 100%;

      // 修改高亮时的border颜色
      &.is-focus {
        & > .el-input__inner {
          border-color: #fff;
        }
      }

      // 修改选择框的背景颜色字体颜色
      & > input {
        height: 100%;
        background-color: #000;
        color: #fff;
        font-size: 20px;
      }
    }
  }

</style>
