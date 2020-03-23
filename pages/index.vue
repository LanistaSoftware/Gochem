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
        <div class="title">
          <h4> <strong> 0{{ item.index }} </strong><span>/</span> <sup> 0{{ slideSets.length }} </sup></h4>
        </div>
        <div class="content">
          <p>
            {{ item.content }}
          </p>
        </div>
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
        <References />
      </Box>
    </div>
  </div>
</template>
<script>
import Social from '@/components/globalcomponents/Social'
import BootstrapCarousel from '@/components/globalcomponents/BootsrapCarousel'
import References from '@/components/globalcomponents/References'
import Box from '@/components/Box'
export default {
  name: 'Slider',
  components: {
    Social,
    BootstrapCarousel,
    Box,
    References
  },
  data () {
    return {
      bgImageUrl: 'bgUrl1',
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
  }
}

</script>
<style lang="less" scoped>
.embed-responsive{
  height: 100%;
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

.content {
  height: 70%;
  font-family: Helvetica, sans-serif;
  font-size: .9rem;
  overflow:hidden; /* Verilen genişlikten (150px) artanı gizlemesini istiyoruz */
  text-overflow:ellipsis; /* Yazının kesildiği yerden üç nokta vermesini sağlıyoruz*/
  p{
  margin: 0 1rem;
  margin-bottom: 1rem;
  }
}
</style>
