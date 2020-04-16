<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    fade
    :interval="4000"
  >
    <b-carousel-slide>
      <template v-slot:img>
        <div class="img-sector-container">
          <img
            class="img-fluid"
            src="../../assets/img/bg1.jpg"
            alt="image slot"
          >
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template v-slot:img>
        <div class="img-sector-container">
          <img
            class="img-fluid"
            src="../../assets/img/bg2.jpg"
            alt="image slot"
          >
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template v-slot:img>
        <div class="img-sector-container">
          <img
            class="img-fluid"
            src="../../assets/img/bg3.jpg"
            alt="image slot"
          >
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style lang="less" scoped>
.img-fluid {

    height: 100%;
    width: auto;
    // background-size: cover!important;
}
.img-sector-container{
  width: 30rem;
  height: 30rem;
}
</style>
