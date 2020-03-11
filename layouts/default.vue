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
clearfix::after {
    display: block;
    content: "";
    clear: both;
  }
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
