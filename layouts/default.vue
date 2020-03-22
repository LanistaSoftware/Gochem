<template>
  <transition
    enter-class=""
    enter-active-class="animated zoomIn bounceInDown"
    leave-class="hinge"
    leave-active-c-lass="animated zoomOutUp"
    appear
  >
    <div class="bg" :class="bgImageUrl[getSlideIndex]">
      <div class="bg-container">
        <Header />
        <nuxt />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </transition>
</template>
<script>
import Header from '@/components/globalcomponents/Header'
import Footer from '@/components/globalcomponents/Footer'
export default {
  components: {
    Header,
    // Social,
    Footer
    // Carousel,
    // Box
  },
  data () {
    return {
      bgImageUrl: ['bgUrl1', 'bgUrl2', 'bgUrl3']
    }
  },
  computed: {
    getSlideIndex () {
      return this.$store.getters.getSlideIndex
    }
  }
}
</script>
<style lang="less" scoped>
.bgUrl1 {
    background: url(../assets/img/bg1.jpg);
    transition: background 2s ease-in-out;
  }
.bgUrl2 {
    background: url(../assets/img/bg2.jpg);
      transition: background 2s ease-in-out;
  }
.bgUrl3 {
    background: url(../assets/img/bg3.jpg);
      transition: background 2s ease-in-out ;
  }
.bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 100vh;
    width: 100%;
  }
</style>
