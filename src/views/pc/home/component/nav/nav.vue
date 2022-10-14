<template>
  <div class="directory-container">
    <div ref="main" class="content-main">
      <h1>主标题 h1, 最重要的部分 </h1>
      <h2>h2标签,子标题</h2>
      <h3>h3则是h2的子标题</h3>
      <p>这里是h3 的内容区域咯 11111111111111111111111111111111111111111111111111111111</p>
      <h3>第二个h3子标题</h3>
      <p>这里是h3 的内容区域咯 222222222222222222222222222222222222222222222222222222222</p>
      <h2>h2标签,可以同时拥有多个子标题</h2>
    </div>
    <div class="directory">
      <template v-if="showDirectory">
        <mapNav :treeData="treeData" />
      </template>
      <el-button v-else type="primary" @click="onShowDirectory">生成目录</el-button>
    </div>
  </div>
</template>

<script>
import mapNav from './component/mapNav.vue'
export default {
  components: { mapNav },
  data () {
    return {
      showDirectory: false,
      treeData: []
    }
  },
  methods: {
    onShowDirectory () {
      const tlearr = ['h1', 'h2', 'h3', 'h4', 'h5']
      const mainDomsChildren = this.$refs.main.children
      // 把h1 - h5的标签过滤出来
      const titleTagArr = [...mainDomsChildren].filter(itm => tlearr.includes(itm.localName))
      // 构建目录
      this.treeData = this.buildTreeData(titleTagArr) || []
      this.showDirectory = true
    },
    buildTreeData(treeNodes) {
      const treeData = [];
      let firstKey = 0; let secondKey = 0; let thirdKey = 0; let fourthKey = 0; let fifthKey = 0;
      treeNodes.forEach(itm => {
        const level = itm.localName.slice(-1);
        if (level === '1') {
          treeData.push({ innerText: itm.innerText, children: [] });
          firstKey++;
          secondKey = 0; thirdKey = 0; fourthKey = 0; fifthKey = 0;
        }
        if (level === '2') {
          treeData[firstKey - 1].children.push({ innerText: itm.innerText, children: [] });
          secondKey++;
          thirdKey = 0; fourthKey = 0; fifthKey = 0;
        }
        if (level === '3') {
          treeData[firstKey - 1].children[secondKey - 1].children.push({ innerText: itm.innerText, children: [] });
          thirdKey++;
          fourthKey = 0; fifthKey = 0;
        }
        if (level === '4') {
          treeData[firstKey - 1].children[secondKey - 1].children[thirdKey - 1].children.push({ innerText: itm.innerText, children: [] });
          fourthKey++;
          fifthKey = 0;
        }
        if (level === '5') {
          treeData[firstKey - 1].children[secondKey - 1].children[thirdKey - 1].children[fourthKey - 1].children.push({ innerText: itm.innerText, children: [] });
          fifthKey++;
        }
      });
      return treeData;
    }
  }
}
</script>

<style scoped lang="scss">
  .directory-container {
    padding: 1.2rem;
    display: flex;
    width: 100%;
    height: 100%;

    .content-main {
      flex: 1;
    }

    .directory {
      text-align: left;
      width: 200px;
    }
  }
</style>
