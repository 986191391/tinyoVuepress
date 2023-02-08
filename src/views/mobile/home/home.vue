<template>
  <div class="mb-home">
    移动端敬请期待！
  </div>
</template>

<script>

export default {
  components: {  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.mb-home {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: scroll;
  scrollbar-width: none; // 清除firefox滚动条
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
