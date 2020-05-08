<template>
  <div class="call">
    <a aria-label="phone" :href="'tel:'+getInfo.telephone"> <i class="flaticon-phone" i /></a>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getInfo: 'getInfo'
    })
  }
}
</script>
<style lang="less" scoped>
.call{
    text-align: right;
    display: none;
}
</style>
