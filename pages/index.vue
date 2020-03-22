/* eslint-disable vue/no-parsing-error */
/* eslint-disable vue/no-use-v-if-with-v-for */
/* eslint-disable vue/attributes-order */
/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div>
    <div class="social clearfix">
      <Social />
    </div>
    <div class="carousel">
      <BootstrapCarousel />
    </div>
    <div class="boxes">
      <Box
        v-for="(item, index) in filteredSlideSets"
        :key="index"
        :item="item"
      >
        <div class="box-header">
          <h1>{{ item.index }} / {{ slideSets.length }}</h1>

          <h4>{{ item.header }}</h4>
        </div>
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
import BootstrapCarousel from '@/components/globalcomponents/BootsrapCarousel'
import Box from '@/components/Box'
export default {
  name: 'Slider',
  components: {
    Social,
    BootstrapCarousel,
    Box
  },
  data () {
    return {
      bgImageUrl: 'bgUrl1',
      imageUrl: require('../assets/img/bg1.jpg'),
      filteredSlideSets: []
    }
  },
  computed: {
    slideSets () {
      return this.$store.getters.getSlideSets
    },
    slideIndex () {
      return this.$store.getters.getSlideIndex
    }
  },
  watch: {
    slideIndex () {
      this.filteredSlideSets = []
      this.slideSets.forEach((element, index) => {
        if (this.slideIndex !== index) {
          this.filteredSlideSets.push(element)
        }
      })
    }
  },
  created () {
    this.filteredSlideSets = [this.slideSets[1], this.slideSets[2]]
  },
  methods: {
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
