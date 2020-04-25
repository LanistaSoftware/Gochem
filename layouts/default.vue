/* eslint-disable nuxt/no-env-in-hooks */
<template>
  <div class="bg" :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
    <div class="overlay">
      <div class="bg-container clearfix">
        <transition enter-active-class="animated fadeInTop" leave-active-class="animated fadeOutTop" appear>
          <SearchInput v-if="searchStatus" />
        </transition>
        <Header />
        <div class="social-search clearfix">
          <Social :show-search="showSearch" class="socials" />
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
import {
  mapGetters, mapActions
} from 'vuex'
import Header from '@/components/globalcomponents/Header/Header'
import Footer from '@/components/globalcomponents/Footer/Footer'
import MobileFooter from '@/components/globalcomponents/Footer/Mobile-footer'
import SearchInput from '@/components/globalcomponents/shared/SearchInput'
import Social from '@/components/globalcomponents/shared/Social'
import Mobile from '@/components/globalcomponents/shared/Mobile'
export default {
  components: {
    Header,
    Social,
    Footer,
    MobileFooter,
    Mobile,
    SearchInput
  },
  data () {
    return {
      bgImageUrl: '',
      searchStatus: false,
      showSearch: true
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
  },
  created () {
    this.getActiveSlide().then(() => {
      this.bgImageUrl = this.getSlideSets[0].imageUrl
    })
  },
  mounted () {
    this.bgImageUrl = this.getSlideSets[0].imageUrl
  },
  methods: {
    ...mapActions({
      getActiveSlide: 'getActiveSlide'
    })
  }
}
</script>
<style lang="less" scoped>
.fadeIn {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}
</style>
