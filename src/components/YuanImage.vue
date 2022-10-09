<template>
  <div class="yuan-image">
    <img v-if="isFinish" :src="src" alt="img" />
    <i v-else class="el-icon-picture-outline" />
  </div>
</template>

<script>
export default {
  name: 'yuanImage',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  created () {
    let img = new Image()
    img.src = this.src
    img.onload = () => {
      this.isFinish = true
    }
  },
  mounted () {
  },
  data () {
    return {
      isFinish: false
    }
  }
}
</script>

<style scoped lang="scss">
  .yuan-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f7fa;
    color: #909399;
    font-size: 50px;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
</style>
