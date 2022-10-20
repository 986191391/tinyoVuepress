<template>
  <div class="card-wrapper" >
    <header>¦ {{title}} ¦ </header>
    <slot />
  </div>
</template>

<script>

export default {
  name: 'ResumeCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
  .card-wrapper  {
    padding: 0.7rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;

    & > header {
      color: #13a3f6;
      font-size: 1.2rem;
      padding: 0 0 0.5rem 0;
      font-weight: bold;
    }
  }
</style>
