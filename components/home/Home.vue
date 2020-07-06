<template>
  <div id="home">
    <div class="carousel">
      <BootstrapCarousel />
    </div>
    <div class="boxes">
      <Box
        class="box-carousel"
      >
        <div class="box-first">
          <img src="~assets/img/bg1.jpg" alt="" srcset="" width="100" height="100">
        </div>
        <div class="box-second">
          <p>
            <span>Uygulama örneklerimiz</span>
            <br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quis quo reprehenderit corrupti doloremque culpa architecto consequuntur, impedit eligendi vitae officiis corporis sed debitis sequi magnam obcaecati alias, enim ratione.
            <br>
            <button class="btn-home">
              Keşfedin
            </button>
          </p>
        </div>
      </Box>
      <Box>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            :src="videoid"
            frameborder="0"
            title="media info"
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
import {
  mapActions,
  mapGetters
} from 'vuex'
import BootstrapCarousel from '@/components/home/BootsrapCarousel'
import References from '@/components/home/References'
import Box from '@/components/home/Box'
export default {
  name: 'Home',
  components: {
    BootstrapCarousel,
    Box,
    References
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
      boxAnimated: false,
      videoid: ''
    }
  },
  computed: {
    ...mapGetters({
      slideSets: 'getSlideSets',
      slideIndex: 'getSlideIndex',
      gettersVideoId: 'gettersVideoId'
    })
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
    this.getVideoId().then(() => {
      this.videoid = 'https://www.youtube.com/embed/' + this.gettersVideoId
    }).catch()
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
    },
    ...mapActions({
      getVideoId: 'getVideoId'
    })
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
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;

  p {
    margin: 0 1rem;
    margin-bottom: 1rem;
  }
}
.box-carousel {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
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
.box-first{
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  float: left;

}
.box-second{
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  float: right;
  padding: 1rem;
  word-spacing: 2px;
  span {
    font-size: 1.5rem !important;
  }
}

strong {
  font-size: 1.5rem;
}
.btn-home {
  text-align: center;
  color: white;
  margin: 0.8rem;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  width: 40%;
  background-color: #499CFD;
}
.btn-home:active {
  border: none;
}
.btn-home:hover {
  border: none;
}
</style>
