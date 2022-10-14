<template>
  <div>
    <div :style="{ paddingLeft: '10px' }" v-for="(itm, idx) in treeData" :key="`treedata-itm${itm.offsetTop}-${idx}`">
      {{itm.innerText}}
      <div v-if="itm.children && itm.children.length">
        <map-nav :treeData="itm.children || []" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mapNav',
  props: {
    treeData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  methods: {
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
      width: 200px;
    }
  }
</style>
