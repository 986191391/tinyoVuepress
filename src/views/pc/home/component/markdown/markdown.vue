<template>
  <div class="markdown-container">
    <div class="markdown-title">
      <h2>点击可编辑</h2>
      <div>写入一个对象, 点击按钮即可生成JSON文件 <el-button type="primary" @click="download" >导出JSON文件</el-button></div>
    </div>
    <div class="markdown-content">
      <pre ref="editwrapper" class="edit-wrapper" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    const editWrapper = this.$refs.editwrapper
    editWrapper.contentEditable = 'true'

    // 为编辑板的键盘输入加入监听事件
    editWrapper.onkeydown = (event) => {
      if (event.code !== 'Tab') return true
      event.preventDefault()
      const { selectionStart, selectionEnd, value } = editWrapper

      // 當 HTML 文件（document）被切換到 designMode 時，它的 document 物件就會對外暴露 execCommand 方法作為操控目前可編輯區域的指令
      if (selectionStart === selectionEnd) {
        document.execCommand('insertText', false, '    ')
      } else {
        const strBefore = value.slice(0, selectionStart)
        const curLineStart = strBefore.includes('\n') ? strBefore.lastIndexOf('\n') + 1 : 0
        const strBetween = value.slice(curLineStart, selectionEnd + 1)
        const newStr = `  ${strBetween.replace(/\n/g, '\n  ')}`
        const lineBreakCount = strBetween.split('\n').length
        const newStart = selectionStart + 2
        const newEnd = selectionEnd + (lineBreakCount + 1) * 2

        this.setSelectionRange(curLineStart, selectionEnd)
        document.execCommand('insertText', false, newStr)
        this.setSelectionRange(newStart, newEnd)
      }
    }
  },
  methods: {
    download () {
      const str = this.$refs.editwrapper.textContent
      // 字符串转为对象的三种方法方法
      // 1. var json = JSON.parse(str);
      // 2. var json = eval("(" + str + ")");
      // 3. var json = (new Function("return " + str))();

      const json = eval(`(${str})`)
      const downloadStr = JSON.stringify(json, null, 2)

      // const url = `data:,${str}`;  // 两种方式
      const url = URL.createObjectURL(new Blob(downloadStr.split('')))

      // 创建a标签并模拟点击下载
      const a = document.createElement('a')
      a.download = 'demo.json'
      a.rel = 'noopener'
      a.href = url
      a.click()
    }
  }
}
</script>

<style scoped lang="scss">
  .markdown-container {
    padding: 1.2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .markdown-title {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .markdown-content {
      height: calc(100% - 150px);
      display: flex;

      & > div, pre {
        width: 100%;
        height: 100%;
      }

      .edit-wrapper {
        padding: 10px;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #ddd;
        background-color: #f3f3f3;
        text-align: left;

        &:focus {
          outline: none;
        }

        & > * {
          line-height: 1.625;
        }
      }
    }
  }
</style>
