
<template>
  <div class="bg" :class="bgImageUrl">
    <div class="bg-container">
      <Header />
      <nuxt />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '@/components/globalcomponents/Header'
// import Social from '@/components/globalcomponents/Social'
import Footer from '@/components/globalcomponents/Footer'
// import Carousel from '@/components/globalcomponents/Carousel'
// import Box from '@/components/Box'
export default {
  components: {
    Header,
    // Social,
    Footer
    // Carousel,
    // Box
  },
  props: {
  },
  data () {
    return {
      bgImageUrl: 'bgUrl1'
    }
  }
}
</script>
