<template>
  <div class="yuan-collapse-select">
    <div class="title" @click="onCollapseSelectChange">
      <span>{{title}}</span>
      <i class="el-icon-arrow-up" :style="{transition: 'all 0.5s', transform: `rotate(${collapseActive ? '180deg' : '0deg'})`}"/>
    </div>
    <div class="content" :style="{height: collapseActive ? `${selectOptions.length * 2.5 + 1}rem` : '0px'}">
      <div class="flex-col options-list">
        <div class="line"/>
        <div
          v-for="(itm, idx) in selectOptions"
          :key="`${itm.label}${idx}`"
          :class="`select-item ${isMobile && 'mobile-item'}`"
          @click="() => onOptionSelect(itm, idx)"
          :style="{backgroundColor: activeArr.includes(`${idx}`) ? '#3478F6' : ''}"
        >{{itm.label}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YuanCollapseSelect',
  props: {
    selectOptions: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    mutiple: {
      type: Boolean,
      default: false
    },
    isScroll: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      collapseActive: false, // 控制是否张开
      selectedObj: {}, // 用于处理数据，构建数据格式
      activeArr: [] // 控制高亮
    }
  },
  methods: {
    onCollapseSelectChange () {
      this.collapseActive = !this.collapseActive
    },
    onOptionSelect (option, index) {
      // 记录选择的数据项下标 组装要传递出去的数据
      const activeArr = []
      const emitData = []

      if (this.mutiple) {
        // 多选处理
        this.selectedObj[index] = this.selectedObj[index] ? false : option
        for (const key in this.selectedObj) {
          if (this.selectedObj[key]) {
            activeArr.push(String(key))
            emitData.push({
              ...this.selectedObj[key],
              itemClick: () => {
                this.onOptionSelect(this.selectedObj[key], key)
              }
            })
          }
        }
      } else {
        // 单选处理
        // 处理原本是选中状态的情况
        if (this.selectedObj[index]) {
          this.selectedObj[index] = false
        } else {
          this.selectedObj = {}
          this.selectedObj[index] = option
          activeArr.push(String(index))
          emitData.push({
            ...option,
            itemClick: () => {
              this.onOptionSelect(option, index)
            }
          })
        }
      }

      // 组件高亮选中
      this.activeArr = activeArr
      // 传递给父亲组件
      this.$emit('onOptionSelect', this.title, emitData)
    }
  }
}
</script>

<style scoped lang="scss">
  .yuan-collapse-select {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    overflow: hidden;
    user-select: none;
    transition: all 0.5s;

    .title {
      padding: 0 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 45px;
      color: #fff;
      cursor: pointer;
    }

    .content {
      transition: all 0.5s;

      .options-list {
        padding: 5px 0;

        .line {
          margin: 0 18px 5px 18px;
          border-top: 1px solid #D9D9D933;
        }

        > .select-item {
          height: 40px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          line-height: 40px;
          background: transparent;
          transition: all 0.5s;
          cursor: pointer;

          &:hover {
            background: #3478F6;
          }

          // 移动端会有hover的背景色 这里做下处理
          &.mobile-item {
            &:hover {
              background: transparent;
            }
          }
        }
      }
    }
  }
</style>
