<template>
  <div class="product-responsive-carousel content-background">
    <carousel
      class="carousel-product"
      :per-page="2.3"
      :navigation-enabled="true"
      :min-swipe-distance="20"
      :navigation-click-target-size="2"
      :pagination-enabled="false"
      :center-mode="true"
      :navigation-next-label="nexticon"
      :navigation-prev-label="previcon"
    >
      <slide v-for="(slide,index) in 10" :key="index" class="carousel-responsive">
        <div class="slide-content" @click="index=i">
          <p>Serkan</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script>
import {
  Carousel,
  Slide
} from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      i: '',
      activeproduct: '',
      nexticon: '<i class="flaticon-next"></i>',
      previcon: '<i class="flaticon-back"></i>'
    }
  }
}

</script>
<style lang="less" scoped>
  .product-responsive-carousel {
    width: 100%;
    margin-top: 2rem;
  }

  .carousel-product {
    color: white !important;
    text-align: center;
    border: none;
    width:100%;
    border-radius: 2em;
    font-size: 1rem;
  }

  .carousel-responsive:not(:last-child) {
    div {
      border-right: 1px solid white;
    }
  }

  .carousel-responsive {
    margin-top: 2.8rem;
  }

</style>
