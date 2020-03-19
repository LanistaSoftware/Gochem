/* eslint-disable vue/no-v-html */
<template>
  <div class="slider">
    <no-ssr>
      <carousel
        :navigate-to="someLocalProperty"
        :autoplay="true"
        :autoplay-timeout="5000"
        :per-page="3"
        :per-page-custom="[[768, 1], [768, 1]]"
        :navigation-enabled="true"
        :scroll-per-page="true"
        :pagination-enabled="true"
        :loop="true"
      >
        <slide>
          <img width="100%" height="500vh" src="../../assets/img/bg1.jpg" alt="">
        </slide>
        <slide>
          <img width="100%" height="500vh" src="../../assets/img/bg2.jpg" alt="">
        </slide>
        <slide>
          <img width="100%" height="500vh" src="../../assets/img/bg3.jpg" alt="">
        </slide>
      </carousel>
    </no-ssr>
    <span />
  </div>
</template>
<script>
// import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel: () =>
      import('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel')
        .then(m => m.Slide)
        .catch()
  },
  data () {
    return {
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#container {
  padding: 0 60px;
}

.VueCarousel-slide  {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.VueCarousel-navigation-button::after{
  color: red !important;
}
.VueCarousel-navigation-button::before{
  color: red !important;
}
</style>
