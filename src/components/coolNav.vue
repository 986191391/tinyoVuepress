<template>
  <div class="cool-nav">
    <div class="nav-wrapper">
      <div class="logo" @click="() => onNavClick('/home/sign')"><img :src="logo" alt="" />tinyo </div>
      <div class="nav-list">
        <div >动画</div>｜
        <div @click="() => onNavClick('/viewport')">操作面板</div>｜
        <div @click="() => onNavClick('/board')">看板</div>｜
        <div @click="() => onNavClick('/author')">关于我</div>｜
        <div @click="() => onNavClick('/threeJs')">threeJS</div>
      </div>
    </div>
    <div class="action-wrapper">
      <!-- <div class="btn">注册/登录</div> -->
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'YuanNav',
  props: {
    navTitle: {
      default: '元计划'
    }
  },
  data () {
    return {
      logo
    }
  },
  methods: {
    onNavClick (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped lang="scss">
  .cool-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 10px 20px;
    position: sticky;
    top: 0px;
    border-bottom: 1px solid #eee;
    background: #fff;
    z-index: 99;

    .nav-wrapper {
      display: flex;
      flex: 1;

      .logo {
        width: 180px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        cursor: pointer;
        user-select: none;
        transition: all 0.5s;

        & > img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }

        &:hover {
          color: #666;
        }
      }

      .nav-list {
        display: flex;
        align-items: center;
        color: #888;

        & > div {
          padding: 5px;
          // margin-left: 10px;
          cursor: pointer;
          user-select: none;

          &:hover {
            color: #000;
          }
        }
      }
    }

    .action-wrapper {
      .btn {
        color: #fff;
        background: #333;
        border-radius: 2px;
        cursor: pointer;
        height: 36px;
        line-height: 36px;
        margin-left: 24px;
        text-align: center;
        width: 116px;
      }
    }

  }
</style>
