<template>
  <!-- <carousel-3d
    class="carousel-product"
    :controls-visible="true"
    :controls-prev-html="'&#10093;'"
    :controls-next-html="'&#10093;'"
    :controls-width="20"
    :controls-height="30"
    :clickable="false"
  >
    <slide class="slider" v-for="(slide, i) in 5" :key="i" :index="i">
      <div>Serkan</div>
    </slide>
  </carousel-3d> -->
  <carousel
    :per-page-custom="[[200, 3], [1024, 3]]"
    :navigation-enabled="true"
    :navigation-next-label="nexticon"
    :navigation-click-target-size="2"
    :pagination-enabled="false"
  >
    <slide class="slider" v-for="(slide,index) in 5" :key="index">
     {{index}}
    </slide>
  </carousel>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: { Carousel, Slide },
  data () {
    return {
      nexticon: '<span class="next sl" style="color:red"><i class="flaticon-right"></i></span>'
    }
  }
}
</script>
<style lang="less" scoped>
.slider{
   background-color:rgba(0, 0, 0, 0.2);
   border: none;
    height: 20rem;
    color: white;
    opacity: 0.5;
}
.VueCarousel-navigation-prev{
    color: red !important;
}
.sl{
    font-size: 20rem;
}
</style>
