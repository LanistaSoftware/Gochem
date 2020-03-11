<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  watch: {
  },
  methods: {
    meth () {
      if (process.client) {
        this.wheigh = window.innerHeight
      }
      return this.wheigh
    }
  }
}
</script>
<style>

</style>
