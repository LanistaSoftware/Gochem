<template>
  <div class="contact-layout">
    <div class="first-contact-background">
      <div class="first-contact-background-overlay">
        <div class="bg-container">
          <Header />
          <div class="social-search">
            <Social class="socials" />
            <Search class="search" />
          </div>
          <Mobile class="mobile-call" />
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear>
            <nuxt />
          </transition>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
// import ContactCarousel from '@/components/contact/ContactCarousel'
import Footer from '../components/globalcomponents/Footer/ContactFooter'
import Header from '@/components/globalcomponents/Header/Header'
import Social from '@/components/globalcomponents/shared/Social'
import Search from '@/components/globalcomponents/shared/Search'
// import MobileFooter from '@/components/globalcomponents/Footer/Mobile-footer'

import Mobile from '@/components/globalcomponents/shared/Mobile'
export default {
  components: {
    Header,
    Social,
    Search,
    // ContactCarousel
    Footer,
    Mobile

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
.fadeIn {
  animation-duration: 1s;
  animation-delay: .1s;
}
</style>
