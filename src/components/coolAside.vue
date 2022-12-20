<template>
  <div class="cool-aside">
    <div class="logo">
      <img class="logo-label" title="回到首页" src="@/assets/logo.png" />
    </div>
    <el-menu
      :default-active="menuActive"
      background-color="#fff"
      text-color="#000"
      active-text-color="#0170fe"
    >
      <template v-for="(itm, idx) in asideData">
        <el-menu-item :key="`aside-${idx}`" :index="String(1 + idx)" router @click="() => goAsidePage(itm)">
          <span slot="title">{{itm.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'CoolAside',
  data () {
    return {
      menuActive: 0,
      asideData: [{
        title: '签章Demo',
        nav: '/home/sign',
        index: '1'
      }, {
        title: '五子棋',
        nav: '/home/gobang',
        index: '2'
      }, {
        title: 'MarkDown',
        nav: '/home/markdown',
        index: '3'
      }, {
        title: '八音盒',
        nav: '/home/musicbox',
        index: '4'
      }, {
        title: '复制粘贴',
        nav: '/home/copyparse',
        index: '5'
      }, {
        title: 'CSS Demo',
        nav: '/home/cssdemo',
        index: '6'
      }, {
        title: '语义话标签目录',
        nav: '/home/directory',
        index: '7'
      }]
    }
  },
  methods: {
    goAsidePage (itm) {
      this.$router.push(itm.nav)
      // this.menuActive
    }
  },
  watch: {
    $route: {
      handler: function (to, from) {
        const curNav = this.asideData.find(itm => itm.nav === to.fullPath)
        this.menuActive = curNav && curNav.index
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
  .cool-aside {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #f0f0f0;

    .logo {
      width: 100%;
      padding: 15px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;

      .logo-label {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        font-size: 24px;
        font-family: Impact;
        cursor: pointer;
      }
    }

    .el-menu {
      ::v-deep .el-menu-item {
        background-color: #fbfbfb !important;

        &:hover {
          background-color: #f3f3f3 !important;
        }
      }
    }
  }
</style>
