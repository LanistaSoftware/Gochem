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
<style lang="less">
@media (min-width: 576px) {
    .naviconshow{
        display: inline !important;

    }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 700px) {
    .naviconshow{
        display: none !important;
    }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    .naviconshow{
        display: none !important;
    }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px){
 .naviconshow{
         display: none !important;
    }
}
</style>
