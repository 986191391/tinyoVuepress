<template>
  <i class="el-icon-refresh-left loading-icon" />
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .loading-icon {
    width: 50px;
    height: 50px;
    font-size: 50px;
    animation: rotate 3s linear infinite;

    &:hover {
      animation: rotate 1s linear infinite;
    }
  }
</style>
