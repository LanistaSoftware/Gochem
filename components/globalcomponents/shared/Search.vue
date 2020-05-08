<template>
  <a aria-label="search" title="search" @click="changeSearchStatus">
    <i class="flaticon-search" /></a>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    changeSearchStatus () {
      this.$store.commit('setSearchStatus', true)
    }
  }
}
</script>
<style lang="less" scoped>
[class^="flaticon-search"]:before {
  font-size: 1.5rem;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
</style>
