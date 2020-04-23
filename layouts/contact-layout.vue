<template>
  <div class="contact-layout">
    <div class="first-contact-background">
      <div class="first-contact-background-overlay">
        <div class="bg-container">
          <transition enter-active-class="animated fadeInTop" leave-active-class="animated fadeOutTop" appear>
            <SearchInput v-if="searchStatus" />
          </transition>
          <Header />
          <div class="social-search">
            <Social class="socials" />
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
import { mapGetters } from 'vuex'
import Footer from '../components/globalcomponents/Footer/ContactFooter'
import Header from '@/components/globalcomponents/Header/Header'
import Social from '@/components/globalcomponents/shared/Social'
import Mobile from '@/components/globalcomponents/shared/Mobile'
import SearchInput from '@/components/globalcomponents/shared/SearchInput'
export default {
  components: {
    Header,
    Social,
    Footer,
    Mobile,
    SearchInput

  },
  data () {
    return {
      bgImageUrl: require('../assets/img/bg1.jpg'),
      searchStatus: false
    }
  },
  computed: {
    ...mapGetters({
      getSlideIndex: 'getSlideIndex',
      getSlideSets: 'getSlideSets',
      getSearchStatus: 'getSearchStatus'
    })
  },
  watch: {
    getSlideIndex () {
      this.bgImageUrl = this.getSlideSets[this.getSlideIndex].imageUrl
    },
    getSearchStatus () {
      this.searchStatus = this.getSearchStatus
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
