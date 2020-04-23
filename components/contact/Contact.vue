<template>
  <div id="contact" class="contact-content">
    <div id="content-bg" class="content-background radius-1em">
      <contactCarousel />
    </div>
  </div>
</template>

<script>

import contactCarousel from '../contact/ContactCarousel'
export default {
  components: {
    contactCarousel
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.contact-content {
  color: white;
  width: 100%;
  //margin-top: 4.5rem;
  padding-bottom: 3rem;
  font-family: Arial, sans-serif;
}
</style>
