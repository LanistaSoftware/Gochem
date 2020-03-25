/* eslint-disable no-console */
<template>
  <div class="carousel-container">
    <i class="sliderBtn left-btn rt flaticon-next" @click="prev()" />
    <i class="sliderBtn right-btn flaticon-next" @click="next()" />
    <b-carousel
      id="carousel-1"
      ref="myCarousel"
      v-model="slides"
      :interval="5000"
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide v-for="(slide ,index) in slideSets" :key="index.id">
        <template v-slot:img>
          <div class="carousel-content">
            <div class="carousel-items">
              <h4><strong> 0{{ index+1 }} </strong><span class="slash">/</span> <sup> 0{{ slideSets.length }} </sup></h4>
              <h2>{{ slide.header | firstWord }} </h2>
              <h2>{{ slide.header |otherWord }} </h2>
              <p class="content">
                {{ slide.content }}
              </p>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  filters: {
    firstWord (header) {
      return header.split(' ', 1).join()
    },
    otherWord (header) {
      const arr = []
      header.split(' ').forEach((element, index) => {
        if (index !== 0) {
          arr.push(element)
        }
      })
      return arr.join(' ')
    }
  },
  data () {
    return {
      slides: 0,
      sliding: null
    }
  },
  computed: {
    slideSets () {
      return this.$store.getters.getSlideSets
    }

  },
  watch: {
    slides () {
      this.$store.commit('setSlideIndex', this.slides)
    }
  },
  methods: {
    prev () {
      this.$refs.myCarousel.prev()
    },
    next () {
      this.$refs.myCarousel.next()
    }
  }
}
</script>
<style lang="less">
.header{
  width: 100%;
}
.sliderBtn {
  position: absolute;
  margin-top: 20vh;
  background-color: transparent;
  padding: .6vh;
  z-index: 2000;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
}
.sliderBtn::before {
    margin-left: 0;
    font-size: 1rem;
    padding: 0 0 0 0.1rem;
}
.rt{
   transform: rotate(180deg) !important;
}
.right-btn{
    right: 0;
 }
 .carousel-content{
   width: 80%;
   margin-left: auto;
   margin-right: auto;
  }
  .carousel-items{
    padding: 3vh;
    color: #fff;
    text-align: left;
    height: 45vh;
    vertical-align: middle;
    display: table-cell;
  }
  .carousel-content h4{
    font-weight: bold;
    padding-bottom: 1.2vh;
    font-family: utopia-std-headline, serif;
  }
  .carousel-content span{
    font-size: 3rem;
  }
  .carousel-content sup{
    font-size: 1.3rem;
  }
  .carousel-content strong{
    font-size: 2.2rem;
  }
  .carousel-content h2{
    font-family: Arial, serif;
    font-size: 4.5rem;
    font-weight: 800;
    padding-bottom: 1vh;
  }
  .carousel-content p{
    font-family: Helvetica , sans-serif;
    font-weight:200;
    font-size: 0.9rem;
    margin-top: 1rem;
    // letter-spacing: 0.1rem;
  }
  .carousel-items {
    color: #fff;
    text-align: left;
}
</style>
