/* eslint-disable nuxt/no-env-in-hooks */

<template>
  <div class="bg" :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
    <div class="overlay">
      <div class="bg-container clearfix">
        <transition enter-active-class="animated fadeInTop" leave-active-class="animated fadeOutTop" appear>
          <SearchInput v-if="searchStatus" />
        </transition>
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
      <div class="footer">
        <Footer class="footer-desktop" />
        <MobileFooter class="mobile-footer" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '@/components/globalcomponents/Header/Header'
import Footer from '@/components/globalcomponents/Footer/Footer'
import MobileFooter from '@/components/globalcomponents/Footer/Mobile-footer'
import SearchInput from '@/components/globalcomponents/shared/SearchInput'
import Social from '@/components/globalcomponents/shared/Social'
import Mobile from '@/components/globalcomponents/shared/Mobile'
import Search from '@/components/globalcomponents/shared/Search'
export default {
  components: {
    Header,
    Social,
    Footer,
    MobileFooter,
    Mobile,
    Search,
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
<style lang="less" scoped>
.fadeIn {
  animation-duration: 1s;
  animation-delay: .1s;
}
</style>
