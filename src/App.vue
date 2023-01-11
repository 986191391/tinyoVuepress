<template>
  <div id="app">
    <transition :name="isMobile ? 'mobileRouter' : 'pcRouter'" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data () {
    return {
    }
  },
  beforeDestroy () {
    store.dispatch('LogOut')
  }
}
</script>

<style lang="scss">
body, html {
  width: 100%;
  min-height: 100vh;

  ::selection {
    background-color: #a1a1a1;
  }
}

#app {
  width: 100vw;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  // 路由切换时的效果
  .mobileRouter-enter-active,
  .mobileRouter-leave-active {
    opacity: 1;
    transition: all 0.65s;
  }
  .mobileRouter-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  .mobileRouter-leave-to{
    opacity: 0;
    transform: translateY(20px);
  }

  .pcRouter-enter-active,
  .pcRouter-leave-active {
    opacity: 1;
    transition: all 0.5s;
  }
  .pcRouter-enter {
    opacity: 0;
  }
  .pcRouter-leave-to{
    opacity: 0;
  }
}

::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}

.mobile-message {
  min-width: auto !important;
  top: 60px !important;
}

// @media screen and (min-width: 600px) {
//   #app {
//     min-width: 1080px;
//   }
// }

// @media screen and (max-width: 600px) {
//   #app {
//     min-width: 100%;
//   }
// }

 /************************************************************
  ** 全局样式!**
  ** 不能删除否则页面将无法正常显示**
  ************************************************************/
html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  flex-shrink: 0;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
</style>
