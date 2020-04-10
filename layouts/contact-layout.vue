<template>
  <div class="contact-layout">
    <div class="first-contact-background">
      <div class="first-contact-background-overlay">
        <div class="bg-container">
          <Header />
          <Socials />
          <nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
// import ContactCarousel from '@/components/contact/ContactCarousel'
import Header from '@/components/globalcomponents/Header/Header'
import Socials from '@/components/globalcomponents/shared/Socials'
import Footer from '@/components/globalcomponents/footer/ContactFooter'
// import MobileFooter from '@/components/globalcomponents/Footer/Mobile-footer'
export default {
  components: {
    Header,
    Socials,
    // ContactCarousel
    Footer
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
/***** Background & Container ****/
.first-contact-background {
  background-image: url('../assets/img/bg2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
}

</style>
