<template>
  <div>
    <div class="social clearfix">
      <Social />
    </div>
    <div class="slider">
      <Carousel />
    </div>
    <div class="boxes">
      <Box v-for="box in 4" :key="box" />
    </div>
  </div>
</template>
<script>
import Social from '@/components/globalcomponents/Social'
import Carousel from '@/components/globalcomponents/Carousel'
import Box from '@/components/Box'
export default {
  components: {
    Social,
    Carousel,
    Box
  },
  data () {
    return {
      bgImageUrl: 'bgUrl1'
    }
  }
}
</script>
<style scoped>

</style>
