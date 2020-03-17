<template>
  <div>
    <div class="social clearfix">
      <Social />
    </div>
    <!-- <div class="slider">
      <Carousel />
    </div> -->
    <div class="boxes">
      <Box
        v-for="item in slideSets"
        :key="item.id"
        :item="item"
      >
        <div
          class="box-group"
        >
          <div class="box-item">
            <h3>{{ item.page }} / <sup>{{ item.pageTwo }}</sup></h3>
            <p>
              {{ item.content }}
            </p>
            <button class="btn btn-primary" @click="counterShow">
              tıkla
            </button>
            <p>{{ counterGet }}</p>
          </div>
        </div>
      </Box>
      <Box>
<<<<<<< HEAD
        <button class="videoBtn">
          Slayt alanında göstermek için tıkla..
        </button>
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
=======
        <mdb-container name="slider">
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
        </mdb-container>
>>>>>>> afee8db8bc1dd881f59bb45d2b80e735c240bb46
      </Box>
      <Box>
        <h1>Referans </h1>
      </Box>
    </div>
  </div>
</template>
<script>
import { mdbContainer } from 'mdbvue'
import Social from '@/components/globalcomponents/Social'
// import Carousel from '@/components/globalcomponents/Carousel'
import Box from '@/components/Box'
export default {
  name: 'Slider',
  components: {
    Social,
<<<<<<< HEAD
    // Carousel,
    Box
=======
    Carousel,
    Box,
    'mdb-container': mdbContainer
>>>>>>> afee8db8bc1dd881f59bb45d2b80e735c240bb46
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
<style scoped>
.embed-responsive{
  height: 100%;
}
.videoBtn{
  position: absolute;
  z-index: 20000;
  font-weight: bold;
  color: blue;
}
</style>
