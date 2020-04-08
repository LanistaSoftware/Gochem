<template>
  <div class="bg" :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
    <div class="overlay">
      <div class="bg-container">
        <Header />
        <Socials />
      </div>
      <!-- <div class="footer-contact">
        <Footer class="footer-desktop" />
        <MobileFooter class="mobile-footer" />
      </div> -->
    </div>
  </div>
</template>
<script>
import Header from '@/components/globalcomponents/Header/Header'
import Socials from '@/components/globalcomponents/shared/Socials'
// import Footer from '@/components/globalcomponents/footer/ContactFooter'
// import MobileFooter from '@/components/globalcomponents/Footer/Mobile-footer'
export default {
  components: {
    Header,
    Socials
    // Footer,
    // MobileFooter
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
<style lang="less">
.mobile-footer{
  display: none;
}
</style>
