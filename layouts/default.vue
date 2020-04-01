<template>
  <transition
    enter-class=""
    enter-active-class="animated lightSpeedIn"
    leave-class=""
    leave-active-c-lass="animated"
    appear
  >
    <div class="bg" :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
      <div class="overlay">
        <div class="bg-container">
          <Header />
          <Social />
          <nuxt />
        </div>
        <div class="footer">
          <Footer />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Header from '@/components/globalcomponents/Header/Header'
import Footer from '@/components/globalcomponents/Footer/Footer'
import Social from '@/components/globalcomponents/Social'
export default {
  components: {
    Header,
    Social,
    Footer
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
