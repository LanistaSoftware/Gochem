<template>
  <div class="bg" :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
    <div class="overlay">
      <div class="bg-container">
        <Header />
        <Socials />
      </div>
      <nuxt />
    </div>
  </div>
</template>
<script>
import Header from '@/components/globalcomponents/Header/Header'
import Socials from '@/components/globalcomponents/shared/Socials'

export default {
  components: {
    Header,
    Socials
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

</style>
