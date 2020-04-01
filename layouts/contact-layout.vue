<template>
  <div class="bg" :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
    <div class="overlay">
      <div class="bg-container">
        <Header />
        <Social />
      </div>
      <nuxt />
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '@/components/globalcomponents/Header/Header'
import Social from '@/components/globalcomponents/Social'
import Footer from '@/components/globalcomponents/footer/ContactFooter'
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
