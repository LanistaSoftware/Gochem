<template>
  <div>
    <Mobile />
    <div class="carousel">
      <BootstrapCarousel />
    </div>
    <div class="boxes">
      <Box
        v-for="(item, index) in filteredSlideSets"
        :key="index"
        class="box-carousel"
        :item="item"
        @click.native="changeIndex(item.index-1)"
      >
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div v-show="boxAnimated" class="title">
            <h4>
              <strong> 0{{ item.index }} </strong><span>/</span> <sup> 0{{ slideSets.length }} </sup>
            </h4>
          </div>
        </transition>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div v-show="boxAnimated" class="box-content">
            <p>
              {{ item.content | filterBoxContent }}
            </p>
          </div>
        </transition>
      </Box>
      <Box>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            src="https://www.youtube.com/embed/Acnr15Nli7Q"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </Box>
      <Box>
        <div class="references-container">
          <References />
        </div>
      </Box>
    </div>
  </div>
</template>
<script>
// import Social from '@/components/globalcomponents/Social'
import BootstrapCarousel from '@/components/home/BootsrapCarousel'
import References from '@/components/home/References'
import Box from '@/components/home/Box'
import Mobile from '@/components/globalcomponents/shared/Mobile'
export default {
  name: 'Slider',
  components: {
    // Social,
    BootstrapCarousel,
    Box,
    References,
    Mobile
  },
  filters: {
    filterBoxContent (value) {
      return value.split(' ').slice(0, 20).join(' ') + '...'
    }
  },
  data () {
    return {
      bgImageUrl: 'bgUrl1',
      filteredSlideSets: [],
      boxAnimated: false
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
      setTimeout(() => {
        this.animateInterval(0)
        this.filteredSlideSets = []
        this.slideSets.forEach((element, index) => {
          if (this.slideIndex !== index) {
            this.filteredSlideSets.push(element)
          }
        })
      }, 700)
      this.animateInterval(400)
    }
  },
  created () {
    this.animateInterval(500)
    this.filteredSlideSets = [this.slideSets[1], this.slideSets[2]]
  },
  methods: {
    animateInterval (int) {
      setTimeout(() => {
        this.boxAnimated = !this.boxAnimated
      }, int)
      return this.boxAnimated
    },
    changeIndex (index) {
      this.$store.commit('changeSlideIndex', index)
    }
  }
}

</script>
<style lang="less" scoped>

/***  Slider Box CSS ****/
.box-content {
  height: 70%;
  font-family: Helvetica, sans-serif;
  font-size: .9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  p {
    margin: 0 1rem;
    margin-bottom: 1rem;
  }
}
.title {
  height: 20%;
  text-align: center;
  font-family: utopia-std-headline, serif;
  margin: 1vh
}
span {
  font-size: 1.9rem;
}
sup {
  font-size: 1rem;
}
strong {
  font-size: 1.5rem;
}

</style>
