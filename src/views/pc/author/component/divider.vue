<template>
  <img class="divider" :src="dividerImg" />
</template>

<script>
import dividerImg from '@/assets/author/divider.png'

export default {
  name: 'Divider',
  components: { },
  data () {
    return {
      dividerImg
    }
  },
}
</script>

<style scoped lang="scss">
  .divider {
    width: 100%;
    height: 5px;
  }
</style>
