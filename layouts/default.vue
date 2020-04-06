<template>
  <div class="bg" :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
    <div class="overlay">
      <div class="bg-container clearfix">
        <Header />
        <Socials />
        <nuxt />
      </div>
      <div class="footer">
        <Footer class="footer-desktop" />
        <MobileFooter class="mobile-footer" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/globalcomponents/Header/Header'
import Footer from '@/components/globalcomponents/Footer/Footer'
import MobileFooter from '@/components/globalcomponents/Footer/Mobile-footer'
import Socials from '@/components/globalcomponents/shared/Socials'
export default {
  components: {
    Header,
    Socials,
    Footer,
    MobileFooter
    // Carousel,
    // Box
  },
  data () {
    return {
      bgImageUrl: require('../assets/img/bg1.jpg')
    }
  },
  computed: {
    getSlideIndex () {
      return this.$store.getters.getSlideIndex
    },
    getSlideSets () {
      return this.$store.getters.getSlideSets
    }
  },
  watch: {
    getSlideIndex () {
      this.bgImageUrl = this.getSlideSets[this.getSlideIndex].imageUrl
    }
  }
}
</script>
<style lang="less" scoped>
.mobile-footer{
  display: none;
}
</style>
