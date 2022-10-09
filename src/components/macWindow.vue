<template>
  <div 
    draggable
    class="mac-window" 
    :style="{ width: windowWidth || '100%'}"
  >
    <div class="window-header">
      <div class="btn-group">
        <div class="btn-red" />
        <div class="btn-yellow" />
        <div class="btn-green" />
      </div>
      {{windowTitle || ''}}
    </div>
    <div class="window-main">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'macWindow',
  props: {
    windowWidth: {
      type: String,
      default: '100%'
    },
    windowTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
  .mac-window {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fbfbfb;

    .window-header {
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 auto;
      border-bottom: 1px solid #ddd;
      padding: 0 12px;
      position: relative;

      .btn-group {
        position: absolute;
        left: 12px;
        display: flex;

        & > div {
          width: 12px;
          height: 12px;
          border-radius: 50%;

          &.btn-red {
            background: #ff6464;
          }

          &.btn-yellow {
            background: #f8c510;
          }

          &.btn-green {
            background: #0fc611;
          }

          &:not(:first-child) {
            margin-left: 6px;
          }
        }
      }
    }

    .window-main {
      width: 100%;
      display: flex;
    }
  }
</style>
