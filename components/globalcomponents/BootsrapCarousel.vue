<template>
  <div>
    <button class="sliderBtn left-btn rt" @click="prev()">
      <i class="flaticon-next" />
    </button>
    <button class="sliderBtn right-btn" @click="next()">
      <i class="flaticon-next" />
    </button>
    <b-carousel
      id="carousel-1"
      ref="myCarousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="Blank Image"
        background="transparent"
        img-blank
        img-alt="Blank image"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Blank Image"
        background="transparent"
        img-blank
        img-alt="Blank image"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
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
    },
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

.sliderBtn {
  position: absolute;
  margin-top: 20%;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 100%;
  padding: .6vh;

}
.rt{
   transform: rotate(180deg) !important;
}
.right-btn{
    right: 0;
 }
.carousel-caption h3{
  margin-bottom: 20rem;
    font-size: 2rem;
    display: flex;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

[class^="carousel-control-next-icon"] {
display: none;
}
[class^="carousel-control-prev-icon"] {
display: none;
}
</style>
