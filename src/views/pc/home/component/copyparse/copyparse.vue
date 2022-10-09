<template>
  <div class="copy-parse-container">
    <h2>This is Copy & Parse Page!</h2>
    <div class="custom-block justify-between" >
      <span>{{navigatorFont}}</span>
      <span class="copy-font" @click="() => this.onCopy(navigatorFont)">点击复制</span>
    </div>
    <div class="custom-block justify-between" >
      <span ref="selectText">{{selectionFont}}</span>
      <span class="copy-font" @click="() => this.onSelectionCopy()">点击选中</span>
    </div>
    <div class="custom-block justify-between" >
      <span>{{documentFont}}</span>
      <span class="copy-font" @click="() => this.onExecCommandCopy()">点击复制</span>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      navigatorFont: '使用 navigator.clipboard.writeText(text) 来复制',
      selectionFont: '使用 Selection API/Range API 来复制',
      documentFont: `使用 document.execCommand('copy') 将选中的项目进行复制`,
    }
  },
  methods: {
    onCopy(text) {
      navigator.clipboard.writeText(text)
    },
    onSelectionCopy() {
      window.getSelection().removeAllRanges()

      const selection = window.getSelection()
      const range = document.createRange()
      const element = this.$refs.selectText
      // RangeAPI: 制造区域
      range.selectNodeContents(element)
      // Selection: 选中区域
      selection.addRange(range)
    },
    onExecCommandCopy() {
      document.execCommand('copy')
      const selection = window.getSelection()
      this.msgSuccess(`缺点是只能够复制选中的文字，现在复制的内容是:${selection.toString()}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .copy-parse-container {
    padding: 1.2rem;
    
    .custom-block {
      padding: 0.5rem 1.2rem;
      margin-top: 0.5rem;
      border-left: 0.5rem solid #42b983;
      background-color: #f3f5f7;
    }

    .copy-font {
      color: #40a9ff;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: #1890ff;
      }
    }
  }
</style>
