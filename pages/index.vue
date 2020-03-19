<template>
  <div>
    <div class="social clearfix">
      <Social />
    </div>
    <div class="carousel">
      <BootsrapCarousel />
    </div>
    <div class="boxes">
      <!-- <Box
        v-for="item in slideSets"
        :key="item.id"
        :item="item"
      > -->
      <Box>
        <div class="box-header" />
      </Box>
      <Box>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Acnr15Nli7Q"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </Box>
      <Box>
        <h1>Referans </h1>
      </Box>
    </div>
  </div>
</template>
<script>
import Social from '@/components/globalcomponents/Social'
import BootsrapCarousel from '@/components/globalcomponents/BootsrapCarousel'
import Box from '@/components/Box'
export default {
  name: 'Slider',
  components: {
    Social,
    BootsrapCarousel,
    Box
  },
  data () {
    return {
      bgImageUrl: 'bgUrl1'
    }
  },
  computed: {
    slideSets () {
      return this.$store.getters.getSlideSets
    },
    counterGet () {
      return this.$store.getters.getCounter
    },
    counter () {
      return this.$store.dispatch.counter
    }
  },
  methods: {
    counterShow () {
      this.$store.dispatch('counter')
    },
    video () {
      alert('messa')
    }
  }
}
</script>
<style lang="less" scoped>
.embed-responsive{
  height: 100%;
}
.box-header{
  text-align: center;
  h4{
    background-color: tomato;
  }
}
</style>
