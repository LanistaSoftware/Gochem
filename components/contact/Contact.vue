<template>
  <div class="contact-content">
    <div class="content-background">
      <contactCarousel />
    </div>
  </div>
</template>

<script>
import contactCarousel from '@/components/contact/contactCarousel'
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
  margin-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1em;
  font-family: Arial, sans-serif;
}
</style>
