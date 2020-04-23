<template>
  <a
    title="search"
    @click="changeSearchStatus"
  >
    <i
      class="flaticon-search"
    /></a>
</template>
<script>
export default {
  data () {
    return {
    }
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
  transition: 0.5s;
}
</style>
