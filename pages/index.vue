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
          <div class="title">
            <h4> <strong> 0{{ item.index }} </strong><span>/</span> <sup> 0{{ slideSets.length }} </sup></h4>
          </div>
          <transition
            enter-class=""
            enter-active-class="animated shake bounceInDown"
            leave-class=""
            leave-active-c-lass="animated swing"
            appear
          >
            <p class="content">
              {{ item.content }}
            </p>
          </transition>
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
        <Referance :referans="referans" />
      </Box>
    </div>
  </div>
</template>
<script>
import Social from '@/components/globalcomponents/Social'
import BootstrapCarousel from '@/components/globalcomponents/BootsrapCarousel'
import Referance from '@/components/globalcomponents/Referance'
import Box from '@/components/Box'
export default {
  name: 'Slider',
  components: {
    Social,
    BootstrapCarousel,
    Box,
    Referance
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
    },
    referans () {
      return this.$store.getters.getReferans
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
   background-image: linear-gradient(to bottom, rgba(22, 98, 150,0.1), rgba(23, 104, 31,0.6));
   height: 100%;
   .title{
     text-align: center;
     font-family: utopia-std-headline, serif;
     padding-top: 1.3vh;
     padding-bottom: 1vh;
   }
   span{
    font-size: 1.9rem;
  }
  sup{
    font-size: 1rem;
  }
  strong{
    font-size: 1.5rem;
  }
}
.content{
  display: -webkit-box;
  font-family: Helvetica, sans-serif;
  -webkit-line-clamp: 6; /*Kaç Stırda sınırlamak istiyorsanız */
  -webkit-box-orient: vertical;
  overflow:hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: .9rem;
}
</style>
